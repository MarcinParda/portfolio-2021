import React from 'react';
import './App.scss';
import NavBar from "./components/app/navbar/NavBar";
import WelcomeSection from "./components/app/WelcomeSection/WelcomeSection";
import RunningMan from "./components/app/RunningMan/RunningMan";
import AboutMeSection from "./components/app/AboutMeSection/AboutMeSection";

const App = () => {
  return (
    <div className="page-wrapper">
      <NavBar />
      <WelcomeSection />
      <RunningMan />
      <AboutMeSection />
    </div>
  );
}

export default App;

