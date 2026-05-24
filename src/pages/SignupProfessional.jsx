import { Link } from 'react-router-dom';

function SignupProfessional() {
  return (
    <main className="page-shell signup-page">
      <section className="auth-card">
        <h1>Register as a healthcare professional</h1>
        <p>Start building your professional workspace with consultations, notes, and patient collaboration.</p>
        <form className="auth-form">
          <div className="input-group">
            <label>Full name</label>
            <input type="text" placeholder="Dr. Jane Doe" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="jane@example.com" />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type="tel" placeholder="+1 555 123 4567" />
          </div>
          <div className="input-group">
            <label>License / specialty</label>
            <input type="text" placeholder="Cardiology, Telehealth" />
          </div>
          <button type="submit" className="button primary">Create professional account</button>
        </form>
        <p className="small-note">
          Already registered? <Link to="/auth">Login instead</Link>
        </p>
      </section>
    </main>
  );
}

export default SignupProfessional;
