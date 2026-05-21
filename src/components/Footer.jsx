import { productServices } from '../data/services'

const footerServices = productServices.slice(0, 8)

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="f-grid">
          <div>
            <div className="f-logo">
              <img
                src="https://ebusinessbazaar.com/wp-content/uploads/2025/04/cropped-WhatsApp_Image_2024-02-03_at_16.47.51-removebg-preview-300x91.png"
                alt="EBUSINESS BAZAAR"
              />
            </div>
            <p className="f-desc">
              Professional websites, digital campaigns, business automation, and hiring support for growing companies in
              Mumbai and across India.
            </p>
            <div className="f-social">
              <a href="https://www.facebook.com/ebusinessbazar/" target="_blank" rel="noreferrer" className="f-soc">
                FB
              </a>
              <a href="https://www.instagram.com/ebusinessbazaar" target="_blank" rel="noreferrer" className="f-soc">
                IG
              </a>
              <a href="https://www.youtube.com/@ebusinessbazaar" target="_blank" rel="noreferrer" className="f-soc">
                YT
              </a>
              <a href="https://www.linkedin.com/company/ebusinessbazar" target="_blank" rel="noreferrer" className="f-soc">
                LI
              </a>
              <a href="https://x.com/ebusinessbazaar" target="_blank" rel="noreferrer" className="f-soc">
                X
              </a>
            </div>
          </div>

          <div className="f-col">
            <h4>Pages</h4>
            <a href="/" data-page="home">
              Home
            </a>
            <a href="/product-services/" data-page="services">
              Product &amp; Services
            </a>
            <a href="/jobs/" data-page="jobs">
              Jobs
            </a>
            <a href="/about-us/" data-page="about">
              About Us
            </a>
            <a href="/contact-us/" data-page="enquiry">
              Enquiry
            </a>
          </div>

          <div className="f-col">
            <h4>Services</h4>
            {footerServices.map((service) => (
              <a href={`/${service.slug}/`} data-service={service.slug} key={service.slug}>
                {service.title}
              </a>
            ))}
          </div>

          <div className="f-col">
            <h4>Contact</h4>
            <a href="tel:+918779692769">+91 8779692769</a>
            <a href="tel:+919892792338">+91 9892792338</a>
            <a href="mailto:info@ebusinessbazaar.com">info@ebusinessbazaar.com</a>
            <a className="f-address">Naigaon, Dadar East, Mumbai - 400014</a>
          </div>
        </div>

        <div className="f-bottom">
          <span>Copyright 2026 EBUSINESS BAZAAR. All rights reserved.</span>
          <span>Developed by Techiolaza Innovations</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
