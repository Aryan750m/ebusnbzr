const AboutUsMarkup = `<div id="page-about" class="page">

  <section class="ps-hero">
    <img 
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
  alt="About Us"
  class="ps-hero-image"
/>
    <div class="ps-hero-overlay"></div>

    <div class="ps-hero-content">
      <h1>About Us</h1>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="about-grid">

        <div>
          <div class="eyebrow">Who We Are</div>

          <h2 class="h2">
            Your Trusted Digital Growth Partner
          </h2>

          <p class="lead">
            EBUSINESS BAZAAR is a Mumbai-based digital agency helping businesses build strong online identities through innovative digital solutions.
          </p>

          <p style="color:var(--sub);line-height:1.78;margin-top:16px;font-size:.95rem">
            From websites and mobile apps to digital marketing and business automation, we deliver scalable solutions tailored for modern businesses. Our mission is to help Indian brands grow faster with technology-driven strategies and professional digital services.
          </p>

          <div class="stats-row">
            <div class="stat-box">
              <span class="num">150+</span>
              <div class="lbl">Projects Delivered</div>
            </div>

            <div class="stat-box">
              <span class="num">50+</span>
              <div class="lbl">Happy Clients</div>
            </div>

            <div class="stat-box">
              <span class="num">5+</span>
              <div class="lbl">Years Experience</div>
            </div>
          </div>
        </div>

        <div>
          <img 
            src="https://redleafdigitals.com/assets/img/about.png"
            alt="Our Team"
            class="about-team-image"
            style="border-radius:16px;width:100%;height:420px;object-fit:contain"
          />
        </div>

      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">

      <div style="text-align:center;margin-bottom:44px">
        <div class="eyebrow" style="justify-content:center">
          Our Values
        </div>

        <h2 class="h2">
          What Makes Us Different
        </h2>
      </div>

      <div 
        style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px" 
        class="val-row"
      >

        <div 
          class="val-item" 
          style="flex-direction:column;align-items:center;text-align:center;padding:28px"
        >
          <div 
            class="val-icon" 
            style="width:54px;height:54px;border-radius:12px;margin-bottom:14px;font-size:1.4rem"
          >
            🎯
          </div>

          <h4>Client Focused</h4>

          <p>
            Every solution is designed around your business goals and customer needs.
          </p>
        </div>

        <div 
          class="val-item" 
          style="flex-direction:column;align-items:center;text-align:center;padding:28px"
        >
          <div 
            class="val-icon" 
            style="width:54px;height:54px;border-radius:12px;margin-bottom:14px;font-size:1.4rem"
          >
            💡
          </div>

          <h4>Creative Innovation</h4>

          <p>
            We combine creativity and technology to build impactful digital experiences.
          </p>
        </div>

        <div 
          class="val-item" 
          style="flex-direction:column;align-items:center;text-align:center;padding:28px"
        >
          <div 
            class="val-icon" 
            style="width:54px;height:54px;border-radius:12px;margin-bottom:14px;font-size:1.4rem"
          >
            🚀
          </div>

          <h4>Fast Execution</h4>

          <p>
            We deliver quality work quickly so your business can move forward without delays.
          </p>
        </div>

      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">

      <div class="about-grid" style="gap:48px">

        <div>
          <div class="eyebrow">Find Us</div>

          <h2 class="h2" style="margin-bottom:28px">
            Contact &amp; Location
          </h2>

          <div class="contact-block">

            <div class="ci-row">
              <div class="ci-icon">📞</div>

              <div>
                <strong>Phone</strong>

                <a href="tel:+918779692769">
                  +91 8779692769
                </a>

                <a href="tel:+919892792338">
                  +91 9892792338
                </a>
              </div>
            </div>

            <div class="ci-row">
              <div class="ci-icon">✉</div>

              <div>
                <strong>Email</strong>

                <a href="mailto:info@ebusinessbazaar.com">
                  info@ebusinessbazaar.com
                </a>
              </div>
            </div>

            <div class="ci-row">
              <div class="ci-icon">📍</div>

              <div>
                <strong>Address</strong>

                <p>
                  Naigaon, Dadar East<br/>
                  Mumbai - 400014, Maharashtra
                </p>
              </div>
            </div>

          </div>

          <a 
            class="btn btn-red" 
            href="#" 
            data-page="enquiry" 
            style="margin-top:24px;display:inline-flex"
          >
            Send an Enquiry →
          </a>
        </div>

        <div 
          style="border-radius:16px;overflow:hidden;border:1px solid var(--line);height:320px"
        >
          <iframe 
            src="https://maps.google.com/maps?q=Dadar+East+Mumbai&output=embed"
            width="100%"
            height="320"
            style="border:none;display:block"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  </section>

</div>`

function AboutUs() {
  return <div dangerouslySetInnerHTML={{ __html: AboutUsMarkup }} />
}

export default AboutUs
