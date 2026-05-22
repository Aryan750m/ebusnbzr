import { useState } from 'react'

const INITIAL_FORM = {
  title: '',
  location: '',
  salary: '',
  description: '',
}

function PostJobs() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const formData = new FormData()
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value.trim())
      })

      const response = await fetch('/api/upload-job', {
        method: 'POST',
        body: formData,
      })

      const result = (await response.text()).trim()

      if (!response.ok) {
        throw new Error(result || 'Unable to submit this job right now.')
      }

      if (result.toLowerCase() !== 'success') {
        throw new Error(result || 'The server did not confirm the job posting.')
      }

      setForm(INITIAL_FORM)
      setStatus({
        type: 'success',
        message: 'Job posted successfully. It should appear in the listings after refresh.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Request failed. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main id="page-post-jobs" className="page">
      <section className="post-jobs-hero">
        <div className="container post-jobs-hero-wrap">
          <div>
            <div className="eyebrow">Hiring Support</div>
            <h1 className="display">Post a Job</h1>
            <p className="lead">
              Share your vacancy with EBUSINESS BAZAAR and reach candidates looking for practical
              opportunities across Mumbai, Thane, Navi Mumbai, and nearby regions.
            </p>
          </div>

          <div className="post-jobs-summary">
            <span>Fast Listing</span>
            <strong>Submit role details in minutes</strong>
            <p>Clear job information helps candidates understand the role and apply faster.</p>
          </div>
        </div>
      </section>

      <section className="post-jobs-section">
        <div className="container post-jobs-layout">
          <aside className="post-jobs-guide">
            <div className="eyebrow">Before Posting</div>
            <h2>Keep details ready</h2>
            <ul>
              <li>Job title and role type</li>
              <li>Work location or branch area</li>
              <li>Monthly salary or expected range</li>
              <li>Responsibilities, eligibility, and joining timeline</li>
            </ul>
            <div className="post-jobs-contact">
              <span>Need help?</span>
              <a href="tel:+918779692769">+91 8779692769</a>
              <a href="mailto:info@ebusinessbazaar.com">info@ebusinessbazaar.com</a>
            </div>
          </aside>

          <form className="post-job-form" onSubmit={handleSubmit}>
            <div className="post-job-form-head">
              <span>Submit Job</span>
              <h2>Job Information</h2>
              <p>Use a clear title and detailed description so the listing is useful for applicants.</p>
            </div>

            <div className="fg">
              <label htmlFor="job-title">Job Title</label>
              <input
                id="job-title"
                name="title"
                type="text"
                placeholder="Kitchen Chef & Helper"
                value={form.title}
                onChange={updateField}
                required
              />
            </div>

            <div className="fg-row">
              <div className="fg">
                <label htmlFor="job-location">Location</label>
                <input
                  id="job-location"
                  name="location"
                  type="text"
                  placeholder="Thane West"
                  value={form.location}
                  onChange={updateField}
                  required
                />
              </div>
              <div className="fg">
                <label htmlFor="job-salary">Salary</label>
                <input
                  id="job-salary"
                  name="salary"
                  type="text"
                  placeholder="15000 to 25000"
                  value={form.salary}
                  onChange={updateField}
                />
              </div>
            </div>

            <div className="fg">
              <label htmlFor="job-description">Full Job Description</label>
              <textarea
                id="job-description"
                name="description"
                rows="9"
                placeholder="Add responsibilities, skills, timing, experience, benefits, and how soon the candidate should join."
                value={form.description}
                onChange={updateField}
                required
              />
            </div>

            <button className="btn btn-red post-job-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Job'}
            </button>

            {status.message && (
              <div className={`post-job-status ${status.type}`}>
                {status.type === 'success' ? '✅' : '⚠️'} {status.message}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

export default PostJobs
