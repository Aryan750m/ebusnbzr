import { useEffect, useMemo, useState } from 'react'

const ITEMS_PER_PAGE = 12
const JOBS_ENDPOINT = import.meta.env.DEV
  ? '/api/jobs'
  : 'https://ebusinessbazar.com/ebusinessbazaar.com/retrive-jobs.php'
const APPLY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScnWMSb1C0LZq1te5djaLDrmeDp7ilMZinXYv6vK-Mp4O1UCw/viewform'

function cleanText(value) {
  return String(value ?? '').trim()
}

function getJobIdFromUrl() {
  if (typeof window === 'undefined' || !window.location.pathname.startsWith('/job-details')) {
    return null
  }

  return new URLSearchParams(window.location.search).get('id')
}

function truncate(text, maxLength = 100) {
  const value = cleanText(text).replace(/\s+/g, ' ')
  return value.length > maxLength ? `${value.slice(0, maxLength)}...` : value
}

function DetailLoader({ children, onBack }) {
  return (
    <section className="job-detail-page">
      <div className="container job-detail-shell">
        {onBack && (
          <button className="job-back-btn" type="button" onClick={onBack}>
            ← Back to Jobs
          </button>
        )}
        <h1 className="job-detail-heading">📝 Job Details</h1>
        {children}
      </div>
    </section>
  )
}

function JobDetails({ job, onBack }) {
  return (
    <DetailLoader onBack={onBack}>
      <div className="job-detail-layout">
        <article className="job-detail-card">
          <div className="job-detail-header">
            <h2>{job.title || 'Job Title Not Provided'}</h2>
            <div className="job-location-pill">📍 {job.location || 'Anywhere'}</div>
          </div>

          <h3>Job Description</h3>
          <div className="job-description-full">
            {job.description || 'No description available for this job.'}
          </div>

          <a className="job-detail-apply" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
            📝 Apply Now
          </a>
        </article>

        <aside className="job-detail-sidebar">
          <div className="job-overview-card">
            <h2>Job Overview</h2>
            <div className="overview-item salary-overview">
              <span>💵Salary</span>
              <strong>{job.salary || 'Not Disclosed'}</strong>
            </div>
            <div className="overview-item">
              <span>📍Location</span>
              <strong>{job.location || 'Anywhere'}</strong>
            </div>
          </div>

          <div className="job-apply-card">
            <p>Ready to apply?</p>
            <a className="job-detail-apply wide" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              🚀 Apply Now
            </a>
          </div>
        </aside>
      </div>
    </DetailLoader>
  )
}

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedJobId, setSelectedJobId] = useState(getJobIdFromUrl)

  useEffect(() => {
    const controller = new AbortController()

    async function loadJobs() {
      try {
        setIsLoading(true)
        setError('')

        const response = await fetch(JOBS_ENDPOINT, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()

        if (!Array.isArray(data)) {
          throw new Error('Invalid job data format')
        }

        setJobs(
          data.map((job, index) => ({
            id: cleanText(job.id) || String(index + 1),
            title: cleanText(job.title),
            location: cleanText(job.location),
            salary: cleanText(job.salary),
            description: cleanText(job.description),
          })),
        )
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Failed to load job listings. Please try again later.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadJobs()

    return () => controller.abort()
  }, [])

  useEffect(() => {
    function syncJobIdFromUrl() {
      setSelectedJobId(getJobIdFromUrl())
    }

    window.addEventListener('popstate', syncJobIdFromUrl)
    window.addEventListener('jobs:navigate-list', syncJobIdFromUrl)

    return () => {
      window.removeEventListener('popstate', syncJobIdFromUrl)
      window.removeEventListener('jobs:navigate-list', syncJobIdFromUrl)
    }
  }, [])

  const filteredJobs = useMemo(() => {
    const keywords = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean)

    if (!keywords.length) {
      return jobs
    }

    return jobs.filter((job) => {
      const haystack = `${job.title} ${job.location} ${job.salary} ${job.description}`.toLowerCase()
      return keywords.every((keyword) => haystack.includes(keyword))
    })
  }, [jobs, searchQuery])

  const selectedJob = useMemo(
    () => jobs.find((job) => job.id === selectedJobId),
    [jobs, selectedJobId],
  )
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE)
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const currentJobs = filteredJobs.slice(start, start + ITEMS_PER_PAGE)
  const showPagination = filteredJobs.length > ITEMS_PER_PAGE
  const noJobsMessage = jobs.length
    ? 'No job listings match your search.'
    : 'Currently no job postings available.'

  function showJobsList() {
    window.history.pushState({}, '', '/')
    setSelectedJobId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function showJobDetails(event, job) {
    event.preventDefault()
    const url = `/job-details/?id=${encodeURIComponent(job.id)}`
    window.history.pushState({}, '', url)
    setSelectedJobId(job.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (selectedJobId) {
    if (isLoading) {
      return (
        <div id="page-jobs" className="page">
          <DetailLoader onBack={showJobsList}>
            <div className="loader-container" aria-label="Loading job details">
              <div className="loader"></div>
            </div>
          </DetailLoader>
        </div>
      )
    }

    if (error) {
      return (
        <div id="page-jobs" className="page">
          <DetailLoader onBack={showJobsList}>
            <div className="no-results">⚠️ {error}</div>
          </DetailLoader>
        </div>
      )
    }

    if (!selectedJob) {
      return (
        <div id="page-jobs" className="page">
          <DetailLoader onBack={showJobsList}>
            <div className="no-results">⚠️ Job not found for ID: {selectedJobId}</div>
          </DetailLoader>
        </div>
      )
    }

    return (
      <div id="page-jobs" className="page">
        <JobDetails job={selectedJob} onBack={showJobsList} />
      </div>
    )
  }

  return (
    <div id="page-jobs" className="page">
      <section className="jobs-board">
        <div className="container jobs-shell">
          <div className="jobs-post-row">
            <a className="jobs-post-btn" href="https://ebusinessbazaar.com/post-jobs/">
              Post Job
            </a>
          </div>

          <h1 className="jobs-heading">🚀 Explore Job Opportunities</h1>

          <div className="search-box-container">
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Search jobs by title, company, or location..."
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value)
                  setCurrentPage(1)
                }}
              />
              <button
                className="clear-btn"
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  setSearchQuery('')
                  setCurrentPage(1)
                }}
              >
                ❌
              </button>
            </div>
          </div>

          {isLoading && (
            <div className="loader-container" aria-label="Loading jobs">
              <div className="loader"></div>
            </div>
          )}

          {!isLoading && error && <div className="no-results">⚠️ {error}</div>}

          {!isLoading && !error && currentJobs.length === 0 && (
            <div className="no-results">{noJobsMessage}</div>
          )}

          {!isLoading && !error && currentJobs.length > 0 && (
            <>
              <div className="jobs-grid">
                {currentJobs.map((job) => (
                  <article className="jobs-card" key={job.id}>
                    <h2 className="job-title">{job.title || 'Untitled Role'}</h2>
                    <div className="salary">💰 {job.salary || 'Salary not disclosed'}</div>
                    <div className="tags">
                      <span className="tag">📍 {job.location || 'Location not shared'}</span>
                    </div>
                    <p className="description">{truncate(job.description)}</p>
                    <div className="job-buttons">
                      <a
                        className="jobs-btn view"
                        href={`/job-details/?id=${encodeURIComponent(job.id)}`}
                        onClick={(event) => showJobDetails(event, job)}
                      >
                        🔍 View More
                      </a>
                      <a className="jobs-btn apply" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                        📝 Apply Now
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {showPagination && (
                <div className="pagination-nav">
                  <button
                    className="btn-arrow"
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  >
                    ⬅ Previous
                  </button>
                  <button
                    className="btn-arrow"
                    type="button"
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  >
                    Next ➡
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Jobs
