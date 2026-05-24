import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import SignupProfessional from './pages/SignupProfessional.jsx';
import SignupPatient from './pages/SignupPatient.jsx';
import DashboardProfessional from './pages/DashboardProfessional.jsx';
import DashboardPatient from './pages/DashboardPatient.jsx';
import DashboardAdmin from './pages/DashboardAdmin.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup/professional" element={<SignupProfessional />} />
      <Route path="/signup/patient" element={<SignupPatient />} />
      <Route path="/dashboard/professional" element={<DashboardProfessional />} />
      <Route path="/dashboard/patient" element={<DashboardPatient />} />
      <Route path="/dashboard/admin" element={<DashboardAdmin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
