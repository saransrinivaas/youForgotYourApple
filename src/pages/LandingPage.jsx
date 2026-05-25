import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/FYA.png';

function LandingPage() {
  const [featureIndex, setFeatureIndex] = useState(0);
  
  const features = [
    {
      title: "Secure Consultations",
      description: "Video and audio sessions built for privacy and HIPAA compliance."
    },
    {
      title: "AI Notes",
      description: "Generate clinical SOAP notes automatically during meetings."
    },
    {
      title: "Session Recording",
      description: "Review consultations later with intelligent timeline markers."
    },
    {
      title: "Patient Management",
      description: "Track patient records, medications, vitals, and care plans."
    },
    {
      title: "Analytics",
      description: "Monitor appointment trends, revenue, and clinical outcomes."
    },
    {
      title: "Team Collaboration",
      description: "Work seamlessly with specialists, nurses, and care coordinators."
    }
  ];

  const nextFeature = () => {
    setFeatureIndex((prev) => (prev + 1) % features.length);
  };

  useEffect(() => {
    const interval = setInterval(nextFeature, 4500);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <main className="page-shell landing-page">
      <nav className="navbar">
        <div className="nav-brand">
          <img src={logo} alt="Forgot Your Apple Logo" className="logo-img" />
          <h2>Forgot Your Apple :)</h2>
        </div>
      </nav>

      <header className="hero-card">
        <div className="hero-text">
          <p className="eyebrow">Secure telehealth platform</p>
          <div className="hero-headline-wrapper">
            <div className="headline-pattern" />
            <h1>Healthcare conversations, without the friction.</h1>
          </div>
          <p className="hero-copy">
            Secure teleconsultations, clinical notes, recordings, and patient collaboration in one workspace.
          </p>
          <div className="hero-actions">
            <Link to="/auth" className="button primary">Start Consultation</Link>
            <Link to="/auth" className="button secondary">Login</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-panel pattern-visual">
            <div className="pattern-grid" />
            <div className="pattern-ring ring-1" />
            <div className="pattern-ring ring-2" />
            <div className="pattern-ring ring-3" />
            <div className="pattern-node node-a" />
            <div className="pattern-node node-b" />
            <div className="pattern-node node-c" />
            <div className="visual-copy">
              <strong>Trusted care flow.</strong>
              <span>Always connected, always private, always designed for modern healthcare.</span>
            </div>
          </div>
        </div>
      </header>

      <section className="feature-carousel">
        <h2>Powerful features for modern healthcare</h2>
        <div className="carousel-wrapper">
          <div className="carousel-track" style={{
            transform: `translateX(calc(-${featureIndex * 33.333}% - ${featureIndex * 16}px))`
          }}>
            {features.map((feature, idx) => (
              <div key={idx} className="carousel-slide">
                <div className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-subtitle">
          Demo mode: automatic feature preview, no arrows needed.
        </div>
        <div className="carousel-dots">
          {features.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === featureIndex ? 'active' : ''}`}
              onClick={() => setFeatureIndex(idx)}
            />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>Privacy</div>
        <div>Terms</div>
        <div>Contact</div>
        <div>About</div>
        <div>Careers</div>
      </footer>
    </main>
  );
}

export default LandingPage;
