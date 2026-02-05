import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import FeatureDetail from './pages/FeatureDetail';
import Contact from './pages/Contact';
import Quizzes from './pages/Quizzes';
import MobileFirst from './pages/MobileFirst';
import Community from './pages/Community';
import Forums from './pages/Forums';
import StudyMaterials from './pages/StudyMaterials';
import RecordedSessions from './pages/RecordedSessions';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/feature/:slug" element={<FeatureDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* New Feature Routes */}
          <Route path="/quizzes-tests" element={<Quizzes />} />
          <Route path="/mobile-first-design" element={<MobileFirst />} />
          <Route path="/community-contribution" element={<Community />} />
          <Route path="/discussion-forums" element={<Forums />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/recorded-sessions" element={<RecordedSessions />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
