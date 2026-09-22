import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import TeamPage from './pages/TeamPage';
import VolunteerPage from './pages/VolunteerPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import JoinModal from './components/JoinModal';
import DonateModal from './components/DonateModal';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  const openDonateModal = () => setIsDonateModalOpen(true);
  const closeDonateModal = () => setIsDonateModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-nurah-bg text-nurah-berry-dark font-sans selection:bg-nurah-rose/30 flex flex-col justify-between">
        
        {/* Responsive Glassmorphic Navbar */}
        <Navbar onOpenJoinModal={openJoinModal} onOpenDonateModal={openDonateModal} />

        {/* Dynamic Hash-Free Route Pages */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenJoinModal={openJoinModal} onOpenDonateModal={openDonateModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenJoinModal={openJoinModal} />}
            />
            <Route
              path="/mission"
              element={<MissionPage onOpenJoinModal={openJoinModal} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage onOpenJoinModal={openJoinModal} />}
            />
            <Route
              path="/resources"
              element={<ResourcesPage />}
            />
            <Route
              path="/team"
              element={<TeamPage onOpenJoinModal={openJoinModal} />}
            />
            <Route
              path="/volunteer"
              element={<VolunteerPage onOpenJoinModal={openJoinModal} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenJoinModal={openJoinModal} />}
            />
            <Route
              path="/donate"
              element={<DonatePage />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenJoinModal={openJoinModal} onOpenDonateModal={openDonateModal} />

        {/* Modals */}
        <JoinModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
        <DonateModal isOpen={isDonateModalOpen} onClose={closeDonateModal} />

      </div>
    </Router>
  );
}
