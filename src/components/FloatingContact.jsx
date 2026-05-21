function PhoneIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M27 23.5 25.2 25.3a5 5 0 0 1-5.2 1.2c-2-.7-4.9-2.4-8.4-6s-5.2-6.5-5.9-8.4A5 5 0 0 1 6.9 6.9L8.7 5.1a1 1 0 0 1 1.4 0l2.8 2.8a1 1 0 0 1 0 1.4l-1.8 1.8a1 1 0 0 0-.1 1.3 40.7 40.7 0 0 0 4.1 4.6 40.7 40.7 0 0 0 4.6 4.1 1 1 0 0 0 1.3-.1l1.8-1.8a1 1 0 0 1 1.4 0l2.8 2.8a1 1 0 0 1 0 1.5Z" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3.2A12.7 12.7 0 0 0 5.3 22.8L4 29l6.4-1.3A12.7 12.7 0 1 0 16 3.2Zm0 23.2c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.8.8.8-3.7-.3-.4A10.5 10.5 0 1 1 16 26.4Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.5 8.5 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.3 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z" />
    </svg>
  )
}

function FloatingContact() {
  const whatsappText =
    'Hello, I would like to make an enquiry about the services offered by EBUSINESS BAZAAR. Could you please provide more details?'
  const whatsappHref = `https://wa.me/918779692769?text=${encodeURIComponent(whatsappText)}`

  return (
    <div className="floating-contact" aria-label="Quick contact actions">
      <a className="floating-call" href="tel:+918779692769" aria-label="Call EBUSINESS BAZAAR">
        <PhoneIcon />
        <span>Call Now</span>
      </a>
      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
        <WhatsappIcon />
        <span>How can I help you?</span>
      </a>
    </div>
  )
}

export default FloatingContact
