import { useEffect, useState } from 'react'
import './App.css'

const currentYear = new Date().getFullYear()

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview preview-${project.visual}`} aria-hidden="true">
      <div className="mock-window">
        <div className="mock-toolbar">
          <span className="window-dots"><i /><i /><i /></span>
          <span>{project.visual}.app</span>
          <span className="mock-menu">•••</span>
        </div>
        <div className="mock-interface">
          <div className="mock-sidebar">
            <i /><i /><i /><i />
          </div>
          <div className="mock-content">
            <span className="mock-title" />
            <span className="mock-subtitle" />
            {project.visual === 'monitor' ? (
              <div className="mock-chart">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
            ) : (
              <div className="mock-panels">
                <i /><i /><i />
              </div>
            )}
            <div className="mock-rows">
              <i /><i /><i />
            </div>
          </div>
        </div>
      </div>
      <span className="preview-glow" />
    </div>
  )
}

function App() {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetch('/api/profile', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Profile request failed (${response.status})`)
        }

        return response.json()
      })
      .then(setProfile)
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
        }
      })

    return () => controller.abort()
  }, [])

  if (error) {
    return (
      <main className="status-screen">
        <div className="status-card">
          <span className="status-dot" />
          <p className="eyebrow">A small setup issue</p>
          <h1>Couldn’t load the profile.</h1>
          <p>
            Start the app with <code>npm run dev</code> and try again.
          </p>
          <p className="error-detail">{error}</p>
        </div>
      </main>
    )
  }

  if (!profile) {
    return (
      <main className="status-screen" aria-live="polite">
        <div className="loading-mark">SD</div>
        <p>Loading Susmita’s profile…</p>
      </main>
    )
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`}>
          <span className="brand-mark">SD</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={`mailto:${profile.email}`}>
          Let’s talk <ArrowIcon diagonal />
        </a>
      </header>

      <main className="page-content">
        <section className="hero panel" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              SOFTWARE ENGINEER · {profile.location.toUpperCase()}
            </div>
            <p className="eyebrow hero-eyebrow">Full-stack developer</p>
            <h1>
              Hi, I’m
              <br />
              <span>{profile.firstName} Dhital</span>
            </h1>
            <p className="hero-role">Software Engineer · React &amp; Node.js</p>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View my work <ArrowIcon diagonal />
              </a>
              <a className="button button-quiet" href={profile.resumePath} download>
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="scroll-cue">
              <span className="scroll-icon" aria-hidden="true">↓</span>
              SCROLL TO EXPLORE
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="portrait-orbit orbit-outer" />
            <div className="portrait-orbit orbit-inner" />
            <div className="portrait-monogram">
              <span>S</span><span>D</span>
            </div>
            <div className="visual-caption">
              <span>BUILDING THOUGHTFUL SOFTWARE</span>
              <span>SYDNEY · AUSTRALIA</span>
            </div>
            <div className="code-window">
              <div className="code-toolbar">
                <span className="window-dots"><i /><i /><i /></span>
                <span>profile.js</span>
                <span className="code-language">JS</span>
              </div>
              <pre aria-label="A code illustration"><code>
                <span className="code-purple">const</span> engineer = {'{'}<br />
                {'  '}focus: <span className="code-cyan">'full stack'</span>,<br />
                {'  '}tools: [<span className="code-cyan">'React'</span>, <span className="code-cyan">'Node.js'</span>],<br />
                {'  '}impact: <span className="code-cyan">'80% less demurrage'</span><br />
                {'}'}
              </code></pre>
            </div>
            <div className="visual-stats" aria-label="Career highlights">
              <div><strong>3+</strong><span>Years of experience</span></div>
              <div><strong>80%</strong><span>Demurrage reduction</span></div>
              <div><strong>Full stack</strong><span>Frontend to backend</span></div>
            </div>
            <div className="social-links" aria-label="Social profiles">
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                GH
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                @
              </a>
            </div>
          </div>
        </section>

        <section className="section-panel" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY EXPERTISE</p>
              <h2>Skills &amp; technologies</h2>
            </div>
            <a className="section-link" href="#about">More about me <ArrowIcon diagonal /></a>
          </div>
          <div className="featured-skills">
            {profile.featuredSkills.map((skill) => (
              <article className="featured-skill" key={skill.name}>
                <span className="skill-mark" aria-hidden="true">{skill.shortName}</span>
                <h3>{skill.name}</h3>
                <p>{skill.area}</p>
                <span className="skill-accent" />
              </article>
            ))}
          </div>
          <div className="more-skills">
            {profile.skills.map((group) => (
              <span key={group.category}>
                <strong>{group.category}</strong>
                {group.items.join(' · ')}
              </span>
            ))}
          </div>
        </section>

        <section className="section-panel projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FEATURED WORK</p>
              <h2>Selected projects</h2>
            </div>
            <span className="section-note">Highlights from production work.</span>
          </div>
          <div className="project-grid">
            {profile.projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <ProjectPreview project={project} />
                <div className="project-copy">
                  <p className="project-type">{project.type}</p>
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <span className="project-number">0{index + 1}</span>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel about-panel" id="about">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>People-first. Detail-driven.</h2>
            </div>
            <a className="section-link" href={profile.resumePath} target="_blank" rel="noreferrer">
              View résumé <ArrowIcon diagonal />
            </a>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="about-lead">{profile.summary}</p>
              <p className="about-approach">{profile.approach}</p>
            </div>
            <div className="career-list">
              {profile.experience.map((job) => (
                <article className="career-item" key={job.company}>
                  <span className="career-period">{job.period}</span>
                  <div>
                    <h3>{job.title}</h3>
                    <p>{job.company} · {job.location}</p>
                  </div>
                </article>
              ))}
              <div className="education-note">
                <span className="eyebrow">EDUCATION</span>
                <p>{profile.education[0].qualification}</p>
                <small>{profile.education[0].institution}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-panel" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">LET’S BUILD SOMETHING</p>
            <h2>Good ideas start<br /><span>with a conversation.</span></h2>
          </div>
          <p className="contact-note">
            I’m always open to discussing thoughtful products, meaningful challenges and new ideas.
          </p>
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Get in touch <ArrowIcon diagonal />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home" aria-label={`${profile.name}, back to top`}>
          <span className="brand-mark">SD</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <span>© {currentYear} {profile.name}. All rights reserved.</span>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="back-to-top" href="#home">↑ <span>Back to top</span></a>
      </footer>
    </div>
  )
}

export default App
