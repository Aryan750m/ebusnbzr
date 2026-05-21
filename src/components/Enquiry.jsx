const EnquiryMarkup = `<div id="page-enquiry" class="page">
  <div class="page-hero">
    <div class="container">
      <div class="eyebrow">Get In Touch</div>
      <h1 class="display" style="font-size:clamp(2rem,4vw,3.8rem);max-width:680px">Let's Grow Your Business</h1>
      <p class="lead" style="max-width:520px">Ready to take your business online? Tell us about your project and we'll get back to you within 24 hours.</p>
    </div>
  </div>
  <div class="enq-section">
    <div class="container enq-wrap">
      <div>
        <div class="eyebrow">Talk To Us</div>
        <h2 class="h2" style="margin-bottom:10px">We're Here to Help</h2>
        <p style="color:var(--sub);margin-bottom:28px;font-size:.95rem">Available Mon–Sat, 10am–7pm IST.</p>
        <div class="contact-block">
          <div class="ci-row"><div class="ci-icon">📞</div><div><strong>Call Us</strong><a href="tel:+918779692769">+91 8779692769</a><a href="tel:+919892792338">+91 9892792338</a></div></div>
          <div class="ci-row"><div class="ci-icon">✉</div><div><strong>Email Us</strong><a href="mailto:info@ebusinessbazaar.com">info@ebusinessbazaar.com</a></div></div>
          <div class="ci-row"><div class="ci-icon">📍</div><div><strong>Visit Us</strong><p>Naigaon, Dadar East, Mumbai - 400014, Maharashtra</p></div></div>
        </div>
        <div style="margin-top:28px">
          <p style="font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:12px">Follow Us</p>
          <div style="display:flex;gap:8px">
            <a href="https://www.facebook.com/ebusinessbazar/" target="_blank" class="f-soc" style="border:1px solid var(--line);color:var(--ink)">FB</a>
            <a href="https://www.instagram.com/ebusinessbazaar" target="_blank" class="f-soc" style="border:1px solid var(--line);color:var(--ink)">IG</a>
            <a href="https://www.youtube.com/@ebusinessbazaar" target="_blank" class="f-soc" style="border:1px solid var(--line);color:var(--ink)">YT</a>
            <a href="https://www.linkedin.com/company/ebusinessbazar" target="_blank" class="f-soc" style="border:1px solid var(--line);color:var(--ink)">LI</a>
            <a href="https://x.com/ebusinessbazaar" target="_blank" class="f-soc" style="border:1px solid var(--line);color:var(--ink)">X</a>
          </div>
        </div>
      </div>
      <div class="enq-form">
        <h3>Send Us a Message</h3>
        <div class="fg-row">
          <div class="fg"><label>First Name</label><input type="text" placeholder="Rahul"/></div>
          <div class="fg"><label>Last Name</label><input type="text" placeholder="Sharma"/></div>
        </div>
        <div class="fg"><label>Email Address</label><input type="email" placeholder="rahul@example.com"/></div>
        <div class="fg"><label>Phone Number</label><input type="tel" placeholder="+91 98765 43210"/></div>
        <div class="fg">
          <label>Service Needed</label>
          <select>
            <option value="">Select a service...</option>
            <option>Website Designing</option>
            <option>E-Commerce Website</option>
            <option>Mobile App Development</option>
            <option>Social Media Management</option>
            <option>Google Ads</option>
            <option>SEO</option>
            <option>Business Listing</option>
            <option>Digital Business Card</option>
            <option>Software Development</option>
            <option>Automation</option>
            <option>Domain &amp; Hosting</option>
            <option>Placement &amp; Courses</option>
            <option>Other</option>
          </select>
        </div>
        <div class="fg"><label>Your Message</label><textarea placeholder="Tell us about your business and what you want to achieve..."></textarea></div>
        <button class="btn btn-red" style="width:100%;justify-content:center" data-submit-enquiry="true">Send Enquiry →</button>
        <div id="fsuccess">✅ Enquiry sent! We'll be in touch within 24 hours.</div>
      </div>
    </div>
  </div>
</div>`

function Enquiry() {
  return <div dangerouslySetInnerHTML={{ __html: EnquiryMarkup }} />
}

export default Enquiry
