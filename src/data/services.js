const uploadBase = 'https://ebusinessbazaar.com/wp-content/uploads/2025/04'

function makeSteps(serviceName, deliveryNoun) {
  return [
    {
      title: 'Discovery & Consultation',
      description: `We begin by understanding your business, audience, current challenges, and goals for ${serviceName.toLowerCase()}. This helps us recommend the right approach before any design or setup work starts.`,
    },
    {
      title: 'Planning & Blueprint',
      description: `We prepare the structure, scope, user flow, and implementation plan so every part of the ${deliveryNoun} is clear, practical, and aligned with your business priorities.`,
    },
    {
      title: 'Creative & Layout Direction',
      description: `We define the visual direction, content blocks, calls to action, and key customer touchpoints so the final experience feels professional and easy to use.`,
    },
    {
      title: 'Setup & Development',
      description: `Approved plans are converted into a working ${deliveryNoun} using clean setup, responsive layouts, secure configuration, and the features your business needs.`,
    },
    {
      title: 'Content Integration',
      description: `We add your text, visuals, products, links, contact details, and business information, then format everything for clarity, search visibility, and customer response.`,
    },
    {
      title: 'Tracking & Optimization',
      description: `We add the important tracking points, refine the page flow, and improve performance so you can measure enquiries, clicks, traffic, and customer actions.`,
    },
    {
      title: 'Testing & Quality Assurance',
      description: `Before launch, we test the ${deliveryNoun} across devices, browsers, forms, links, and key user journeys to make sure everything works smoothly.`,
    },
    {
      title: 'Final Revisions',
      description: `You review the completed work, share changes, and we polish the final details so the result is ready for real customers.`,
    },
    {
      title: 'Launch & Go-Live',
      description: `The ${deliveryNoun} is published with the required settings, integrations, and support checks so your business can start using it immediately.`,
    },
    {
      title: 'Training & Ongoing Support',
      description: `We guide you on how to use and manage the system, and we can continue with maintenance, updates, reports, and improvements as your business grows.`,
    },
  ]
}

const websiteDesigningSteps = [
  {
    title: 'Discovery & Consultation',
    description:
      'We begin by understanding your business, target audience, design preferences, and goals. This helps us create a website strategy that aligns with your brand identity.',
  },
  {
    title: 'Planning & Blueprint',
    description:
      'We prepare the website structure and user flow, ensuring the site is easy to navigate and logically organized.',
  },
  {
    title: 'Wireframes & Layout Design',
    description:
      'Basic layout sketches are created to show the placement of key elements. This stage ensures the foundation is perfect before we move to full design.',
  },
  {
    title: 'UI/UX Design',
    description:
      'We design visually appealing, responsive webpages using your brand colors, fonts, and style. Each page is optimized for clarity, aesthetics, and conversions.',
  },
  {
    title: 'Website Development',
    description:
      'Approved designs are turned into a fully functional website. We build clean, secure, and optimized pages with smooth animations, forms, and features you need.',
  },
  {
    title: 'Content Integration',
    description:
      'We add your content, text, images, videos, and products, and format everything for readability, SEO, and engagement.',
  },
  {
    title: 'Testing & Quality Assurance',
    description:
      'Before launching, we test your website across devices and browsers to ensure everything works flawlessly. Speed, performance, and usability are fully optimized.',
  },
  {
    title: 'Final Revisions',
    description:
      'You review the website, request any changes, and we polish the final details.',
  },
  {
    title: 'Launch & Go-Live',
    description:
      'Your website is deployed on your domain and hosting. We set up SSL, basic SEO settings, and analytics for performance tracking.',
  },
  {
    title: 'Training & Ongoing Support',
    description:
      'We provide guidance on using and managing your website, and offer maintenance packages to keep your site secure and updated.',
  },
]

export const productServices = [
  {
    slug: 'web-designing',
    title: 'Website Designing',
    pageTitle: 'Web Designing',
    image: `${uploadBase}/5421915.webp`,
    summary: 'Responsive business websites designed for trust, clarity, and enquiries.',
    detailIntro:
      'Website Designing covers the full process of planning, designing, building, launching, and supporting a professional business website.',
    steps: websiteDesigningSteps,
  },
  {
    slug: 'e-commerce-website',
    title: 'E-Commerce Website',
    pageTitle: 'E-Commerce Website',
    image: `${uploadBase}/6505894-1-scaled.webp`,
    summary: 'Online stores with products, navigation, checkout flow, and conversion focus.',
    detailIntro:
      'E-Commerce Website service helps you sell products online with a structured catalog, customer-friendly pages, and secure enquiry or checkout flows.',
    steps: makeSteps('E-Commerce Website', 'online store'),
  },
  {
    slug: 'business-listing',
    title: 'Business Listing',
    pageTitle: 'Business Listing',
    image: `${uploadBase}/4957857-scaled.webp`,
    summary: 'Structured business presence for local discovery and online credibility.',
    detailIntro:
      'Business Listing service improves how customers find your company across search, maps, directories, and local discovery platforms.',
    steps: makeSteps('Business Listing', 'business listing profile'),
  },
  {
    slug: 'digital-business-card',
    title: 'Digital Business Card',
    pageTitle: 'Digital Business Card',
    image: `${uploadBase}/vecteezy_isometric-flat-3d-illustration-concept-of-computer-data_21272418.webp`,
    summary: 'A shareable digital profile with contact details, links, and enquiry actions.',
    detailIntro:
      'Digital Business Card service gives you a compact online identity page that is easy to share with customers, partners, and prospects.',
    steps: makeSteps('Digital Business Card', 'digital business card'),
  },
  {
    slug: 'mini-website',
    title: 'Mini Website',
    pageTitle: 'Mini Website',
    image: `${uploadBase}/3126038-scaled.webp`,
    summary: 'A compact web presence for businesses that need a quick, focused launch.',
    detailIntro:
      'Mini Website service creates a small but polished online presence for businesses that need essential information, service highlights, and direct enquiry options.',
    steps: makeSteps('Mini Website', 'mini website'),
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    pageTitle: 'Mobile App Development',
    image: `${uploadBase}/Project_44-04-scaled.webp`,
    summary: 'Mobile-first product experiences for customers, teams, and operations.',
    detailIntro:
      'Mobile App Development service turns your business workflow or customer idea into a practical mobile experience with clear screens and useful actions.',
    steps: makeSteps('Mobile App Development', 'mobile app'),
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    pageTitle: 'Social Media Management',
    image: `${uploadBase}/4950546.webp`,
    summary: 'Consistent creatives, posting calendars, captions, and campaign support.',
    detailIntro:
      'Social Media Management service keeps your brand active, consistent, and audience-ready across the platforms your customers already use.',
    steps: makeSteps('Social Media Management', 'social media system'),
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    pageTitle: 'Google Ads',
    image: `${uploadBase}/vecteezy_advertisement-thick-line-filled-colors-icon-design_.webp`,
    summary: 'Search and performance campaigns focused on measurable enquiries.',
    detailIntro:
      'Google Ads service helps your business reach people who are actively searching, with campaigns built around keywords, landing pages, and measurable actions.',
    steps: makeSteps('Google Ads', 'ads campaign'),
  },
  {
    slug: 's-e-o',
    title: 'S.E.O',
    pageTitle: 'S.E.O',
    image: `${uploadBase}/7155205-scaled.webp`,
    summary: 'On-page, technical, and content improvements for long-term search growth.',
    detailIntro:
      'S.E.O service improves the structure, content, and visibility signals of your website so search engines and customers can understand it better.',
    steps: makeSteps('S.E.O', 'SEO plan'),
  },
  {
    slug: 'whatsapp-sms-email',
    title: 'Whatsapp, SMS & Email',
    pageTitle: 'Whatsapp, SMS & Email',
    image: `${uploadBase}/2937927.webp`,
    summary: 'Customer communication flows for updates, offers, reminders, and support.',
    detailIntro:
      'Whatsapp, SMS & Email service helps you communicate with customers through practical message flows, audience lists, and campaign-ready templates.',
    steps: makeSteps('Whatsapp, SMS & Email', 'communication campaign'),
  },
  {
    slug: 'logo-designing',
    title: 'Logo Designing',
    pageTitle: 'Logo Designing',
    image: `${uploadBase}/2001.i039.031_branding_isometric_concept_icons-12-scaled.webp`,
    summary: 'Brand identity marks designed for digital, print, and everyday business use.',
    detailIntro:
      'Logo Designing service creates a clear and memorable visual identity that can be used across your website, social media, stationery, and marketing material.',
    steps: makeSteps('Logo Designing', 'brand identity'),
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    pageTitle: 'Software Development',
    image: `${uploadBase}/vecteezy_programmer-working-on-computer-with-lots-of-data_4579307-1.webp`,
    summary: 'Custom dashboards, internal tools, integrations, and business systems.',
    detailIntro:
      'Software Development service creates custom tools and systems around the exact way your business works, instead of forcing your team into a generic setup.',
    steps: makeSteps('Software Development', 'software system'),
  },
  {
    slug: 'automation',
    title: 'Automation',
    pageTitle: 'Automation',
    image: `${uploadBase}/vecteezy_cloud-server-business-management-data-analysis-robot_8258627.webp`,
    summary: 'Process automation for forms, alerts, CRM flows, reports, and repetitive tasks.',
    detailIntro:
      'Automation service reduces repetitive manual work by connecting forms, alerts, data, reports, and team workflows into smoother business processes.',
    steps: makeSteps('Automation', 'automation workflow'),
  },
  {
    slug: 'domain-hosting',
    title: 'Domain & Hosting',
    pageTitle: 'Domain & Hosting',
    image: `${uploadBase}/vecteezy_a-man-is-working-on-a-laptop-in-front-of-two-server-racks-in_46885389.webp`,
    summary: 'Domain, hosting, email, SSL, and website maintenance support.',
    detailIntro:
      'Domain & Hosting service helps your website stay online with the right domain setup, hosting plan, email configuration, security, and ongoing support.',
    steps: makeSteps('Domain & Hosting', 'hosting setup'),
  },
  {
    slug: 'placement',
    title: 'Placement',
    pageTitle: 'Placement',
    image: `${uploadBase}/4574122.webp`,
    summary: 'Hiring and placement support for businesses and digital talent.',
    detailIntro:
      'Placement service connects companies with suitable candidates and helps learners or professionals prepare for digital business roles.',
    steps: makeSteps('Placement', 'placement process'),
  },
  {
    slug: 'courses',
    title: 'Courses',
    pageTitle: 'Courses',
    image: `${uploadBase}/9963615-scaled.webp`,
    summary: 'Practical training programs for digital skills, business tools, and career growth.',
    detailIntro:
      'Courses service provides practical learning paths for students, professionals, and businesses that want useful digital skills with guided support.',
    steps: makeSteps('Courses', 'training program'),
  },
]

export function getServiceBySlug(slug) {
  return productServices.find((service) => service.slug === slug)
}
