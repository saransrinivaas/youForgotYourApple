import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="page-shell not-found-page">
      <section className="auth-card">
        <h1>Page not found</h1>
        <p>We couldn’t find that page. Return to the home page to continue.</p>
        <Link to="/" className="button primary">Back to home</Link>
      </section>
    </main>
  );
}

export default NotFound;
