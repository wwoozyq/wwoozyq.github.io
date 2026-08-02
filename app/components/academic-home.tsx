"use client";

import { useState } from "react";
import {
  education,
  experience,
  news,
  profile,
  projects,
  publications,
  recognition,
} from "../content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isPlaceholder = href === "#";

  return (
    <a
      className={className}
      href={href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noreferrer"}
      onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
      aria-disabled={isPlaceholder}
      title={isPlaceholder ? "Replace this link in app/content.ts" : undefined}
    >
      {children}
    </a>
  );
}

export function AcademicHome() {
  const [publicationView, setPublicationView] = useState<"selected" | "all">(
    "selected",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const visiblePublications =
    publicationView === "selected"
      ? publications.filter((publication) => publication.featured)
      : publications;

  return (
    <div className="site" data-theme={darkMode ? "dark" : "light"}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="topbar">
        <a className="wordmark" href="#about" aria-label="Back to top">
          <span>{profile.initials}</span>
          <span className="wordmark-text">Academic portfolio</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode((enabled) => !enabled)}
          aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="about">
          <aside className="profile-card" aria-label="Profile information">
            <div className="portrait-frame" aria-label="Profile photo placeholder">
              <span>{profile.initials}</span>
              <small>Your photo</small>
            </div>

            <div className="identity-block">
              <p className="eyebrow">Research profile</p>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
            </div>

            <dl className="profile-facts">
              <div>
                <dt>Affiliation</dt>
                <dd>{profile.affiliation}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
            </dl>

            <div className="profile-links" aria-label="Profile links">
              {profile.links.map((link) => (
                <ExternalLink key={link.label} href={link.href}>
                  {link.label}<span aria-hidden="true">↗</span>
                </ExternalLink>
              ))}
            </div>
          </aside>

          <div className="hero-copy">
            <div className="draft-pill">
              <span /> Draft content · ready to personalize
            </div>
            <p className="display-kicker">Curious systems. Careful science.</p>
            <h2>
              Researching how intelligent systems can <em>see</em>, <em>reason</em>,
              and <em>earn trust</em>.
            </h2>
            <p className="hero-intro">{profile.intro}</p>
            <p className="hero-note">{profile.note}</p>

            <div className="interest-list" aria-label="Research interests">
              {profile.interests.map((interest, index) => (
                <div key={interest}>
                  <span>0{index + 1}</span>
                  <strong>{interest}</strong>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <a className="primary-button" href="#publications">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href={`mailto:${profile.email}`}>
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="band" id="news">
          <div className="section-shell section-grid">
            <div className="section-heading">
              <p className="eyebrow">Updates</p>
              <h2>Recent news</h2>
              <p>A compact record of papers, talks, awards, and new chapters.</p>
            </div>
            <ol className="news-list">
              {news.map((item, index) => (
                <li key={`${item.date}-${index}`}>
                  <time>{item.date}</time>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-shell content-section" id="publications">
          <div className="section-heading row-heading">
            <div>
              <p className="eyebrow">Research output</p>
              <h2>Publications</h2>
            </div>
            <div className="segmented-control" aria-label="Publication view">
              <button
                type="button"
                className={publicationView === "selected" ? "active" : ""}
                aria-pressed={publicationView === "selected"}
                onClick={() => setPublicationView("selected")}
              >
                Selected
              </button>
              <button
                type="button"
                className={publicationView === "all" ? "active" : ""}
                aria-pressed={publicationView === "all"}
                onClick={() => setPublicationView("all")}
              >
                All work
              </button>
            </div>
          </div>

          <div className="publication-list">
            {visiblePublications.map((publication, index) => (
              <article className="publication-card" key={publication.title}>
                <div className={`paper-visual visual-${index + 1}`} aria-hidden="true">
                  <span>{publication.topic}</span>
                  <strong>{publication.year}</strong>
                </div>
                <div className="paper-body">
                  <div className="paper-meta">
                    <span>{publication.venue}</span>
                    <span>{publication.year}</span>
                  </div>
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors}</p>
                  <p>{publication.summary}</p>
                  <div className="paper-links">
                    {publication.links.map((link) => (
                      <ExternalLink key={link.label} href={link.href}>
                        {link.label} <span aria-hidden="true">↗</span>
                      </ExternalLink>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="band" id="experience">
          <div className="section-shell split-section">
            <div>
              <div className="section-heading compact-heading">
                <p className="eyebrow">Path</p>
                <h2>Experience</h2>
              </div>
              <div className="timeline">
                {experience.map((item) => (
                  <article key={`${item.period}-${item.title}`}>
                    <time>{item.period}</time>
                    <h3>{item.title}</h3>
                    <p className="timeline-place">{item.place}</p>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <div className="section-heading compact-heading">
                <p className="eyebrow">Training</p>
                <h2>Education</h2>
              </div>
              <div className="education-list">
                {education.map((item) => (
                  <article key={`${item.period}-${item.degree}`}>
                    <time>{item.period}</time>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell content-section" id="projects">
          <div className="section-heading row-heading">
            <div>
              <p className="eyebrow">Beyond papers</p>
              <h2>Selected projects</h2>
            </div>
            <p className="heading-note">
              Tools, systems, and experiments that make research tangible.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ExternalLink key={project.number} href={project.href} className="project-card">
                <span className="project-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>{project.tags.join(" · ")}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </ExternalLink>
            ))}
          </div>

          <div className="recognition-grid">
            <div>
              <p className="eyebrow">Recognition</p>
              <h3>Awards</h3>
              <ul>
                {recognition.awards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Community</p>
              <h3>Academic service</h3>
              <ul>
                {recognition.service.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-band">
          <div className="section-shell contact-inner">
            <p className="eyebrow">Let&apos;s connect</p>
            <h2>Good research starts with a good question.</h2>
            <a href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <p>© 2026 {profile.name}. Built for clear ideas and open collaboration.</p>
        <a href="#about">Back to top ↑</a>
      </footer>
    </div>
  );
}
