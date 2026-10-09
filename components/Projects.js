const projects = [
  {
    number: "01",
    title: "Project One",
    description:
      "A placeholder for a project you are proud of. Add a short description of the problem it solves and what you learned.",
    technologies: ["Technology", "Tool"],
    href: "#",
  },
  {
    number: "02",
    title: "Project Two",
    description:
      "Describe another project here, including its purpose, your contribution, and any interesting features.",
    technologies: ["Technology", "Tool"],
    href: "#",
  },
  {
    number: "03",
    title: "Project Three",
    description:
      "Use this card for a class assignment, personal experiment, or collaborative project you would like to share.",
    technologies: ["Technology", "Tool"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
          <p>
            A few projects from my learning journey. These placeholders are
            ready for your own work and links.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <span className="project-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                  <span className="tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              {/* Replace the placeholder href with the project URL. */}
              <a
                className="project-link"
                href={project.href}
                aria-label={`View ${project.title} (placeholder link)`}
              >
                View <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
