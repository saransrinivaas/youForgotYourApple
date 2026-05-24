function DashboardPatient() {
  return (
    <main className="page-shell dashboard-page patient-dashboard">
      <aside className="dashboard-sidebar">
        <h2>Patient</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#appointments">Appointments</a>
          <a href="#doctors">Doctors</a>
          <a href="#records">Medical History</a>
          <a href="#prescriptions">Prescriptions</a>
          <a href="#messages">Messages</a>
          <a href="#payments">Payments</a>
          <a href="#settings">Settings</a>
        </nav>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Patient Home</p>
            <h1>Your next appointment is ready</h1>
          </div>
        </header>

        <div className="cards-grid">
          <article>
            <h3>Upcoming Appointment</h3>
            <p>Dr. Rachel Kim · Tomorrow at 2:00 PM</p>
          </article>
          <article>
            <h3>Recent Prescription</h3>
            <p>Amoxicillin · 7-day refill</p>
          </article>
          <article>
            <h3>Messages</h3>
            <p>2 unread messages from your care team</p>
          </article>
          <article>
            <h3>Health Summary</h3>
            <p>Blood pressure, meds, and follow-ups in one place.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default DashboardPatient;
