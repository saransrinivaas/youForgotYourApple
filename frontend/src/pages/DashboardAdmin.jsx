function DashboardAdmin() {
  return (
    <main className="page-shell dashboard-page admin-dashboard">
      <aside className="dashboard-sidebar">
        <h2>Admin</h2>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#doctors">Doctors</a>
          <a href="#patients">Patients</a>
          <a href="#appointments">Appointments</a>
          <a href="#logs">Session Logs</a>
          <a href="#revenue">Revenue</a>
          <a href="#compliance">Compliance</a>
          <a href="#support">Support</a>
          <a href="#analytics">Analytics</a>
        </nav>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Admin Command Center</p>
            <h1>Monitor operational health and compliance.</h1>
          </div>
        </header>

        <div className="cards-grid">
          <article>
            <h3>Total Users</h3>
            <p>8,540</p>
          </article>
          <article>
            <h3>Doctors Online</h3>
            <p>124
            </p>
          </article>
          <article>
            <h3>Active Sessions</h3>
            <p>38</p>
          </article>
          <article>
            <h3>Revenue</h3>
            <p>$96.2k</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default DashboardAdmin;
