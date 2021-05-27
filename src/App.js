import React from 'react';
import './App.scss';
import NavBar from "./components/app/navbar/NavBar";
import WelcomeSection from "./components/app/WelcomeSection/WelcomeSection";

const App = () => {
  return (
    <div className="page-wrapper">
      <NavBar />
      <WelcomeSection />
    </div>
  );
}

export default App;
