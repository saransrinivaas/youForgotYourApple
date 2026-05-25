import { Link } from 'react-router-dom';

function SignupPatient() {
  return (
    <main className="page-shell signup-page">
      <section className="auth-card">
        <h1>Register as a patient</h1>
        <p>Get access to appointments, records, messages, and telehealth sessions from one simple portal.</p>
        <form className="auth-form">
          <div className="input-group">
            <label>Full name</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type="tel" placeholder="+1 555 987 6543" />
          </div>
          <div className="input-group">
            <label>Preferred doctor or specialty</label>
            <input type="text" placeholder="Primary care, Dermatology" />
          </div>
          <button type="submit" className="button primary">Create patient account</button>
        </form>
        <p className="small-note">
          Already registered? <Link to="/auth">Login instead</Link>
        </p>
      </section>
    </main>
  );
}

export default SignupPatient;
