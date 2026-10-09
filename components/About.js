const facts = [
  { icon: "📍", label: "Based in", value: "Bagabag, Nueva Vizcaya" },
  { icon: "🎂", label: "Birthday", value: "November 30 · Bonifacio Day" },
];

const hobbies = ["🌿 Nature Trips", "✨ Exploring", "🎮 Mobile Legends"];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-copy reveal">
          <p className="eyebrow">A little about me</p>
          <h2>Curious by nature, growing through every experience.</h2>
          <p>
            I’m Natasha Mae Dalit Haber, from Bagabag, Nueva Vizcaya. I enjoy
            learning new things and finding inspiration in the places and
            people around me.
          </p>
          <p>
            When I’m away from my studies, you’ll often find me enjoying a
            nature trip, going out to explore, or playing Mobile Legends.
          </p>
          <div className="hobby-list" aria-label="Hobbies">
            {hobbies.map((hobby) => (
              <span className="hobby-card" key={hobby}>
                {hobby}
              </span>
            ))}
          </div>
        </div>
        <div className="about-facts reveal">
          {facts.map((fact) => (
            <article className="fact-card" key={fact.label}>
              <span className="fact-icon" aria-hidden="true">
                {fact.icon}
              </span>
              <strong>{fact.label}</strong>
              <span>{fact.value}</span>
            </article>
          ))}
          <article className="fact-card">
            <span className="fact-icon" aria-hidden="true">
              💡
            </span>
            <strong>What I enjoy</strong>
            <span>Learning and creating</span>
          </article>
          <article className="fact-card">
            <span className="fact-icon" aria-hidden="true">
              💙
            </span>
            <strong>My approach</strong>
            <span>Stay curious, keep growing</span>
          </article>
        </div>
      </div>
    </section>
  );
}
