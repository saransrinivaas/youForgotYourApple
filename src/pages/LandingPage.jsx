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

  const prevFeature = () => {
    setFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto-play feature carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <main className="page-shell landing-page">
      <nav className="navbar">
        <div className="nav-brand">
          <img src={logo} alt="Forgot Your Apple Logo" className="logo-img" />
          <h2>Forgot Your Apple</h2>
        </div>
      </nav>

      <header className="hero-card">
        <div className="hero-text">
          <p className="eyebrow">Secure telehealth platform</p>
          <h1>Healthcare conversations, without the friction.</h1>
          <p className="hero-copy">
            Secure teleconsultations, clinical notes, recordings, and patient collaboration in one workspace.
          </p>
          <div className="hero-actions">
            <Link to="/auth" className="button primary">Start Consultation</Link>
            <Link to="/auth" className="button secondary">Login</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-panel">
            <svg width="100%" height="100%" viewBox="0 0 200 200" style={{ maxWidth: '200px' }}>
              <circle cx="100" cy="100" r="80" fill="#7c5cff" opacity="0.2" />
              <circle cx="100" cy="100" r="60" fill="#7c5cff" opacity="0.4" />
              <circle cx="100" cy="100" r="40" fill="#7c5cff" />
            </svg>
          </div>
          <div className="visual-panel">
            <svg width="100%" height="100%" viewBox="0 0 200 100" style={{ maxWidth: '200px' }}>
              <rect x="10" y="20" width="80" height="60" fill="#7c5cff" opacity="0.3" />
              <rect x="110" y="20" width="80" height="60" fill="#7c5cff" opacity="0.6" />
            </svg>
          </div>
        </div>
      </header>

      <section className="feature-carousel">
        <h2>Powerful features for modern healthcare</h2>
        <div className="carousel-wrapper">
          <button className="carousel-btn side prev" onClick={prevFeature}>
            ←
          </button>
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
          <button className="carousel-btn side next" onClick={nextFeature}>
            →
          </button>
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
