import { productServices } from '../data/services'

function ProductServices() {
  return (
    <main id="page-services" className="page">
      <section className="ps-hero product-services-hero">
        <div className="container ps-hero-inner">
          <div className="ps-hero-copy">
            <span className="eyebrow">Products & Services</span>
            <h1>Strategic digital solutions designed for visibility, trust, and action.</h1>
            <p className="lead">
              We deliver websites, online stores, and digital products that feel premium, guide visitors clearly, and turn traffic into strong leads.
            </p>
            <div className="ps-hero-actions">
              <a className="btn btn-red" href="/contact-us/">
                Book a consultation
              </a>
              <a className="btn btn-outline" href="/about-us/">
                See how we work
              </a>
            </div>
          </div>

          <div className="ps-hero-visual">
            <div className="ps-hero-card">
              <span className="ps-hero-label">Most requested</span>
              <h2>Market-ready website packages</h2>
              <p>
                Ready-made page structures, conversion-first layouts and service funnels built to help your business attract enquiries fast.
              </p>
              <ul className="ps-hero-features">
                <li>Fast launch design system</li>
                <li>Lead forms + contact journeys</li>
                <li>SEO-ready pages and content flow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-highlight-section">
        <div className="container">
          <div className="ps-highlight-grid">
            <article className="ps-highlight-card">
              <h3>Clear product choices</h3>
              <p>
                Each service is presented with a simple purpose so prospects can quickly find the right solution for websites, e-commerce, or digital growth.
              </p>
            </article>
            <article className="ps-highlight-card">
              <h3>Stronger page storytelling</h3>
              <p>
                We use bold headings, sharp visuals, and compact messaging to highlight value, pricing-ready clarity, and the next step for customers.
              </p>
            </article>
            <article className="ps-highlight-card">
              <h3>Experience-led design</h3>
              <p>
                The page is crafted with modern spacing, layered cards, and motion-ready sections to make the offering feel new and distinctive.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="ps-catalog-section">
        <div className="container">
          <div className="ps-catalog-head">
            <p className="eyebrow">Service menu</p>
            <h2 className="h2">Discover your next digital solution.</h2>
            <p className="lead">
              From premium websites to full e-commerce and growth support, every option is built for clarity, trust, and measurable results.
            </p>
          </div>

          <div className="ps-grid">
            {productServices.map((service) => (
              <article className="ps-card" key={service.slug}>
                <div className="ps-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="ps-card-body">
                  <span className="ps-card-pill">{service.pageTitle || service.title}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <a
                  className="ps-view-btn"
                  href={`/${service.slug}/`}
                  data-service={service.slug}
                >
                  View More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductServices
