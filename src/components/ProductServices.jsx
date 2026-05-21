import { productServices } from '../data/services'

function ProductServices() {
  return (
    <main id="page-services" className="page">
      
      {/* Hero Section */}
      <section className="ps-hero">
  <img
    src="https://www.provenprotocol.com/wp-content/uploads/2024/09/Products-and-Services.jpg"
    alt="Products and Services"
    className="ps-hero-image"
  />

  <div className="ps-hero-overlay"></div>

  <div className="ps-hero-content">
    <h1></h1>
  </div>
</section>

      {/* Products Grid */}
      <section className="ps-catalog-section">
        <div className="container">

          <div className="ps-grid">
            {productServices.map((service) => (
              <article className="ps-card" key={service.slug}>

                <div className="ps-image-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>

                <h2>{service.title}</h2>

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