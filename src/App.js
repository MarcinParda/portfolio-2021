import React from 'react';
import './App.scss';
import NavBar from "./components/app/navbar/NavBar";
import WelcomeSection from "./components/app/WelcomeSection/WelcomeSection";
import RunningMan from "./components/app/RunningMan/RunningMan";
import AboutMeSection from "./components/app/AboutMeSection/AboutMeSection";
import Footer from "./components/app/Footer/Footer";
import ProjectsSection from "./components/app/ProjectsSection/ProjectsSection";

const App = () => {
  return (
    <div className="page-wrapper">
        <NavBar />
        <WelcomeSection />
        <RunningMan className="mt-6" />
        <AboutMeSection />
        <RunningMan revert />
        <ProjectsSection />
        <Footer />
    </div>
  );
}

export default App;
