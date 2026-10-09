export default function Education() {
  return (
    <section className="section section-soft" id="education">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">My learning journey</p>
          <h2>Education</h2>
          <p>
            Building a strong foundation in information technology and network
            management.
          </p>
        </div>
        <article className="education-card reveal">
          <div className="education-icon" aria-hidden="true">
            🎓
          </div>
          <div>
            <h3>Nueva Vizcaya State University</h3>
            <p className="education-degree">
              Bachelor of Science in Information Technology
              <br />
              Major in Network Design and Management
            </p>
            <p className="education-school">Bayombong Campus</p>
            <span className="education-badge">3rd Year Student</span>
          </div>
        </article>
      </div>
    </section>
  );
}
