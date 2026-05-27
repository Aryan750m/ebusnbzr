import { useEffect, useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs'
import Enquiry from './components/Enquiry'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Home from './components/Home'
import Jobs from './components/Jobs'
import PostJobs from './components/PostJobs'
import ProductServices from './components/ProductServices'
import ServiceDetail from './components/ServiceDetail'
import SiteShell from './components/SiteShell'
import { getServiceBySlug } from './data/services'

const pages = {
  home: Home,
  services: ProductServices,
  serviceDetail: ServiceDetail,
  jobs: Jobs,
  postJobs: PostJobs,
  about: AboutUs,
  enquiry: Enquiry,
}

const pagePaths = {
  home: '/',
  services: '/product-services/',
  jobs: '/jobs/',
  postJobs: '/post-jobs/',
  about: '/about-us/',
  enquiry: '/contact-us/',
}

const revealSelector = [
  '.hero-left > *',
  '.hero-right',
  '.section .eyebrow',
  '.section .h2',
  '.section .lead',
  '.s-card',
  '.w-card',
  '.t-card',
  '.cta-band .container > *',
  '.ps-hero-content',
  '.ps-card',
  '.service-detail-card',
  '.service-process-item',
  '.jobs-board .container > *',
  '.jobs-card',
  '.post-jobs-hero-wrap > *',
  '.post-jobs-guide',
  '.post-job-form',
  '.job-detail-layout > *',
  '.contact-block',
  '.enq-form',
  '.fg-row',
]

const magneticSelector = [
  '.btn',
  '.nav-enquiry',
  '.ps-view-btn',
  '.jobs-btn',
  '.jobs-post-btn',
  '.post-job-submit',
  '.job-detail-apply',
  '.job-back-btn',
  '.service-back-link',
  '.clear-btn',
  '.btn-arrow',
]

const tiltSelector = [
  '.s-card',
  '.w-card',
  '.jobs-card',
  '.t-card',
  '.service-detail-card',
  '.job-detail-card',
  '.job-overview-card',
  '.job-apply-card',
]

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function animateCount(el) {
  const original = el.dataset.countOriginal || el.textContent.trim()
  const match = original.match(/^(\d+(?:\.\d+)?)(.*)$/)

  if (!match) {
    return
  }

  el.dataset.countOriginal = original
  const endValue = Number(match[1])
  const suffix = match[2]
  const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0
  const duration = 1200
  let startTime

  function tick(now) {
    if (!startTime) {
      startTime = now
    }

    const progress = Math.min((now - startTime) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = endValue * eased
    el.textContent = `${current.toFixed(decimals)}${suffix}`

    if (progress < 1) {
      window.requestAnimationFrame(tick)
    } else {
      el.textContent = original
    }
  }

  el.textContent = `0${suffix}`
  window.requestAnimationFrame(tick)
}

function getRouteFromPath() {
  const cleanPath = window.location.pathname.replace(/^\/|\/$/g, '')

  if (window.location.pathname.startsWith('/job-details')) {
    return { page: 'jobs', serviceSlug: null }
  }

  if (cleanPath === 'product-services') {
    return { page: 'services', serviceSlug: null }
  }

  if (cleanPath === 'jobs') {
    return { page: 'jobs', serviceSlug: null }
  }

  if (cleanPath === 'post-jobs') {
    return { page: 'postJobs', serviceSlug: null }
  }

  if (cleanPath === 'about-us') {
    return { page: 'about', serviceSlug: null }
  }

  if (cleanPath === 'contact-us') {
    return { page: 'enquiry', serviceSlug: null }
  }

  if (getServiceBySlug(cleanPath)) {
    return { page: 'serviceDetail', serviceSlug: cleanPath }
  }

  return { page: 'home', serviceSlug: null }
}

function App() {
  const initialRoute = getRouteFromPath()
  const [activePage, setActivePage] = useState(initialRoute.page)
  const [serviceSlug, setServiceSlug] = useState(initialRoute.serviceSlug)
  const Page = pages[activePage]

  useEffect(() => {
    function handlePopState() {
      const nextRoute = getRouteFromPath()
      setActivePage(nextRoute.page)
      setServiceSlug(nextRoute.serviceSlug)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined
    }

    const page = document.querySelector('.page')

    if (!page) {
      return undefined
    }

    page.classList.add('page-motion')

    const headline = page.querySelector('.hero-left .display')
    let headlineTimer

    if (headline) {
      headline.classList.add('typewriter-ready')
      headlineTimer = window.setTimeout(() => {
        headline.classList.add('is-typed')
      }, 1800)
    }

    const revealElements = Array.from(page.querySelectorAll(revealSelector.join(',')))
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((el, index) => {
      el.classList.add('reveal-on-scroll')
      el.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 65}ms`)
      revealObserver.observe(el)
    })

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.countAnimated) {
            entry.target.dataset.countAnimated = 'true'
            animateCount(entry.target)
            counterObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.65,
      },
    )

    page.querySelectorAll('.stat-num').forEach((counter) => {
      counterObserver.observe(counter)
    })

    const parallaxLayers = Array.from(
      page.querySelectorAll('.hero-right img, .hero-pill, .ps-hero-image, .ps-visual-card'),
    )

    parallaxLayers.forEach((layer, index) => {
      layer.classList.add('parallax-layer')
      layer.style.setProperty('--parallax-speed', index % 2 === 0 ? '22' : '14')
    })

    let animationFrame = 0

    function updateMotion() {
      animationFrame = 0
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)

      parallaxLayers.forEach((layer) => {
        const rect = layer.getBoundingClientRect()

        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          return
        }

        const speed = Number(layer.style.getPropertyValue('--parallax-speed')) || 18
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
        layer.style.setProperty('--parallax-y', `${Math.max(Math.min(offset * -speed, 24), -24)}px`)
      })
    }

    function requestMotionUpdate() {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateMotion)
      }
    }

    updateMotion()
    window.addEventListener('scroll', requestMotionUpdate, { passive: true })
    window.addEventListener('resize', requestMotionUpdate)

    return () => {
      window.clearTimeout(headlineTimer)
      window.removeEventListener('scroll', requestMotionUpdate)
      window.removeEventListener('resize', requestMotionUpdate)
      window.cancelAnimationFrame(animationFrame)
      revealObserver.disconnect()
      counterObserver.disconnect()
    }
  }, [activePage, serviceSlug])

  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) {
      return undefined
    }

    const cursor = document.createElement('div')
    const cursorTrail = document.createElement('div')
    cursor.className = 'brand-cursor'
    cursorTrail.className = 'brand-cursor-trail'
    document.body.append(cursor, cursorTrail)
    document.body.classList.add('has-brand-cursor')

    const interactiveSelector = [
      'a',
      'button',
      'input',
      'textarea',
      'select',
      '.btn',
      '.s-card',
      '.w-card',
      '.ps-card',
      '.jobs-card',
      '[data-page]',
      '[data-service]',
    ].join(',')

    let cursorX = -100
    let cursorY = -100
    let trailX = -100
    let trailY = -100
    let activeMagnetic = null
    let activeTilt = null

    function resetMagnetic(target) {
      target?.classList.remove('is-magnetic')
      target?.style.removeProperty('--magnet-x')
      target?.style.removeProperty('--magnet-y')
    }

    function resetTilt(target) {
      target?.classList.remove('is-tilting')
      target?.style.removeProperty('--tilt-x')
      target?.style.removeProperty('--tilt-y')
    }

    function handlePointerMove(event) {
      if (!(event.target instanceof Element)) {
        return
      }

      cursorX = event.clientX
      cursorY = event.clientY
      cursor.style.setProperty('--cursor-x', `${cursorX}px`)
      cursor.style.setProperty('--cursor-y', `${cursorY}px`)

      const magneticTarget = event.target.closest(magneticSelector.join(','))

      if (activeMagnetic && activeMagnetic !== magneticTarget) {
        resetMagnetic(activeMagnetic)
      }

      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect()
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18
        const y = (event.clientY - rect.top - rect.height / 2) * 0.22
        magneticTarget.classList.add('is-magnetic')
        magneticTarget.style.setProperty('--magnet-x', `${x}px`)
        magneticTarget.style.setProperty('--magnet-y', `${y}px`)
      }

      activeMagnetic = magneticTarget

      const tiltTarget = event.target.closest(tiltSelector.join(','))

      if (activeTilt && activeTilt !== tiltTarget) {
        resetTilt(activeTilt)
      }

      if (tiltTarget) {
        const rect = tiltTarget.getBoundingClientRect()
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -7
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 7
        tiltTarget.classList.add('is-tilting')
        tiltTarget.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
        tiltTarget.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
      }

      activeTilt = tiltTarget
    }

    function handlePointerOver(event) {
      if (event.target instanceof Element && event.target.closest(interactiveSelector)) {
        document.body.classList.add('cursor-active')
      }
    }

    function handlePointerOut(event) {
      if (!(event.target instanceof Element)) {
        return
      }

      const fromInteractive = event.target.closest(interactiveSelector)
      const toInteractive =
        event.relatedTarget instanceof Element ? event.relatedTarget.closest(interactiveSelector) : null

      if (fromInteractive && fromInteractive !== toInteractive) {
        document.body.classList.remove('cursor-active')
      }
    }

    let cursorFrame = 0

    function animateCursorTrail() {
      trailX += (cursorX - trailX) * 0.18
      trailY += (cursorY - trailY) * 0.18
      cursorTrail.style.setProperty('--cursor-x', `${trailX}px`)
      cursorTrail.style.setProperty('--cursor-y', `${trailY}px`)
      cursorFrame = window.requestAnimationFrame(animateCursorTrail)
    }

    cursorFrame = window.requestAnimationFrame(animateCursorTrail)

    document.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      window.cancelAnimationFrame(cursorFrame)
      resetMagnetic(activeMagnetic)
      resetTilt(activeTilt)
      document.body.classList.remove('has-brand-cursor', 'cursor-active')
      cursor.remove()
      cursorTrail.remove()
    }
  }, [])

  function handleClick(event) {
    const serviceLink = event.target.closest('[data-service]')
    const pageLink = event.target.closest('[data-page]')
    const menuToggle = event.target.closest('[data-toggle-menu]')
    const enquirySubmit = event.target.closest('[data-submit-enquiry]')

    if (serviceLink) {
      event.preventDefault()
      const nextSlug = serviceLink.dataset.service

      setServiceSlug(nextSlug)
      setActivePage('serviceDetail')
      window.history.pushState({}, '', `/${nextSlug}/`)
      document.querySelector('[data-mobile-menu]')?.style.setProperty('display', 'none')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (pageLink) {
      event.preventDefault()
      const nextPage = pageLink.dataset.page

      setServiceSlug(null)
      window.history.pushState({}, '', pagePaths[nextPage] || '/')
      setActivePage(nextPage)
      if (nextPage === 'jobs') {
        window.dispatchEvent(new Event('jobs:navigate-list'))
      }
      document.querySelector('[data-mobile-menu]')?.style.setProperty('display', 'none')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (menuToggle) {
      const menu = document.querySelector('[data-mobile-menu]')
      if (menu) {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'
      }
      return
    }

    if (enquirySubmit) {
      document.getElementById('fsuccess')?.style.setProperty('display', 'block')
    }
  }

  return (
    <div onClick={handleClick}>
      <SiteShell
        activePage={
          activePage === 'serviceDetail' ? 'services' : activePage === 'postJobs' ? 'jobs' : activePage
        }
      />
      <Page serviceSlug={serviceSlug} />
      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App
