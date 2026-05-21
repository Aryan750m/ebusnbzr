const SiteShellMarkup = `<!-- HEADER -->
<header>
  <div class="container nav-inner">
    <a href="#" data-page="home" style="display:flex;align-items:center">
      <img src="https://ebusinessbazaar.com/wp-content/uploads/2025/04/cropped-WhatsApp_Image_2024-02-03_at_16.47.51-removebg-preview-300x91.png" alt="EBUSINESS BAZAAR" style="height:46px;width:auto"/>
    </a>
    <nav id="main-nav">
      <a href="#" data-page="home" data-p="home" >Home</a>
      <a href="#" data-page="services" data-p="services">Product &amp; Services</a>
      <a href="#" data-page="jobs" data-p="jobs">Jobs</a>
      <a href="#" data-page="about" data-p="about">About Us</a>
    </nav>
    <a href="#" data-page="enquiry" class="nav-enquiry desktop-enquiry" data-p="enquiry">Enquiry</a>
    <button id="hamburger" data-toggle-menu="true" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- MOBILE MENU -->
  <div id="mobile-menu" data-mobile-menu>
    <a href="#" data-page="home" data-close-menu="true">Home</a>
    <a href="#" data-page="services" data-close-menu="true">Product &amp; Services</a>
    <a href="#" data-page="jobs" data-close-menu="true">Jobs</a>
    <a href="#" data-page="about" data-close-menu="true">About Us</a>
    <a href="#" data-page="enquiry" data-close-menu="true" class="m-enq">Enquiry</a>
  </div>
</header>

<!-- ══════════════ HOME ══════════════ -->`

function SiteShell({ activePage }) {
  const activeWithClass = new RegExp(
    `(<a(?=[^>]*data-p="${activePage}")(?=[^>]*class=")[^>]*class=")([^"]*)(")`,
  )
  const activeWithoutClass = new RegExp(
    `(<a(?=[^>]*data-p="${activePage}")(?![^>]*class=)[^>]*)>`,
  )
  const html = SiteShellMarkup.replace(activeWithClass, '$1$2 active$3').replace(
    activeWithoutClass,
    '$1 class="active">',
  )

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default SiteShell
