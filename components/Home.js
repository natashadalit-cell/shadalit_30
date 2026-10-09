import Image from "next/image";
import profilePhoto from "../profile.jpg";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <p className="eyebrow">Hello, welcome to my portfolio</p>
          <h1>
            Natasha Mae <span>Dalit Haber</span>
          </h1>
          <p className="hero-title">IT Student | Aspiring Programmer</p>
          <p className="hero-description">
            Curious about technology and always ready to learn, build, and turn
            new ideas into meaningful digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="portrait-wrap reveal" aria-label="Profile photo">
          <div className="portrait-ring">
            <Image
              src={profilePhoto}
              alt="Natasha Mae Dalit Haber"
              className="portrait-photo"
              priority
              sizes="(max-width: 768px) 70vw, 330px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
