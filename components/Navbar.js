const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Natasha Haber, home">
          Natasha<span>.</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
