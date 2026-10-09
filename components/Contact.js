const socials = [
  { label: "GitHub", shortLabel: "GH" },
  { label: "LinkedIn", shortLabel: "in" },
  { label: "Facebook", shortLabel: "f" },
];

export default function Contact() {
  return (
    <section className="section section-soft" id="contact">
      <div className="container">
        <div className="contact-panel reveal">
          <p className="eyebrow eyebrow-light">Let’s connect</p>
          <h2>Have a project or idea in mind?</h2>
          <p>
            I’d love to hear from you. Send me an email and let’s start a
            conversation.
          </p>
          <a className="contact-email" href="mailto:natashadalit@gmail.com">
            natashadalit@gmail.com
          </a>
          <div>
            <a
              className="button"
              href="mailto:natashadalit@gmail.com?subject=Hello%20Natasha"
            >
              Send Email <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="social-links" aria-label="Social media placeholders">
            {socials.map((social) => (
              <a
                href="#"
                key={social.label}
                aria-label={`${social.label} profile placeholder`}
                title={`${social.label} — replace this placeholder link`}
              >
                {social.shortLabel}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
