import { getServiceBySlug, productServices } from '../data/services'

function ServiceDetail({ serviceSlug }) {
  const service = getServiceBySlug(serviceSlug) || productServices[0]

  return (
    <div className="page service-detail-page">
      <section className="ps-title-band service-title-band">
        <div className="container">
          <h1>{service.pageTitle}</h1>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-container">
          <a className="service-back-link" href="/product-services/" data-page="services">
            Back to Products &amp; Services
          </a>

          <div className="service-detail-card">
            <div className="service-detail-intro">
              <div>
                <div className="eyebrow">Service Detail</div>
                <h2>{service.title}</h2>
                <p>{service.detailIntro}</p>
              </div>
              <a className="btn btn-red" href="#" data-page="enquiry">
                Enquiry
              </a>
            </div>

            <div className="service-process-list">
              {service.steps.map((step, index) => (
                <section className="service-process-item" key={step.title}>
                  <h3>
                    {index + 1}. {step.title}
                  </h3>
                  <p>{step.description}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
