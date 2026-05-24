import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AuthPage() {
  const [role, setRole] = useState('professional');
  const [identifier, setIdentifier] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!identifier.trim()) {
      return;
    }
    if (role === 'professional') {
      navigate('/dashboard/professional');
    } else if (role === 'patient') {
      navigate('/dashboard/patient');
    } else {
      navigate('/dashboard/admin');
    }
  }

  return (
    <main className="page-shell auth-page">
      <section className="auth-card">
        <h1>Sign in to Forgot Your Apple</h1>
        <p>Use your email or phone number to continue. We'll route you to the right workspace.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>Login identifier</label>
            <input
              type="text"
              placeholder="Email or phone"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
            />
          </div>

          <div className="input-group radio-group">
            <label>Role</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="role"
                  checked={role === 'professional'}
                  onChange={() => setRole('professional')}
                />
                Healthcare Professional
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  checked={role === 'patient'}
                  onChange={() => setRole('patient')}
                />
                Customer
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  checked={role === 'admin'}
                  onChange={() => setRole('admin')}
                />
                Administrator
              </label>
            </div>
          </div>

          <button type="submit" className="button primary">Continue</button>
        </form>

        <div className="auth-footer">
          <p>Create an account:</p>
          <Link to="/signup/professional" className="link-button">Healthcare Professional Signup</Link>
          <Link to="/signup/patient" className="link-button">Patient Signup</Link>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
