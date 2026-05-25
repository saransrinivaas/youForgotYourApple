function DashboardProfessional() {
  return (
    <main className="page-shell dashboard-page">
      <aside className="dashboard-sidebar">
        <h2>Professional</h2>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#appointments">Appointments</a>
          <a href="#patients">Patients</a>
          <a href="#consultations">Consultations</a>
          <a href="#messages">Messages</a>
          <a href="#notes">Notes</a>
          <a href="#analytics">Analytics</a>
          <a href="#settings">Settings</a>
        </nav>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Professional Dashboard</p>
            <h1>Today’s care workflow</h1>
          </div>
          <div className="mini-cards">
            <div>Notifications</div>
            <div>Active session</div>
          </div>
        </header>

        <div className="cards-grid">
          <article>
            <h3>Today’s Patients</h3>
            <p>12 patients scheduled</p>
          </article>
          <article>
            <h3>Upcoming Appointments</h3>
            <p>3 meetings in the next 2 hours</p>
          </article>
          <article>
            <h3>Pending Notes</h3>
            <p>4 drafts waiting to complete</p>
          </article>
          <article>
            <h3>Total Consultations</h3>
            <p>982 this month</p>
          </article>
        </div>

        <section className="dashboard-panel">
          <div>
            <h2>Appointment queue</h2>
            <table>
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maria Lopez</td>
                  <td>10:30 AM</td>
                  <td>Follow-up</td>
                  <td>Scheduled</td>
                  <td><button className="small-button">Join</button></td>
                </tr>
                <tr>
                  <td>James Carter</td>
                  <td>11:00 AM</td>
                  <td>New patient</td>
                  <td>Confirmed</td>
                  <td><button className="small-button">Join</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="panel-card">
            <h2>Live notes</h2>
            <p>Draft SOAP notes while consulting, then save automatically.</p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default DashboardProfessional;
