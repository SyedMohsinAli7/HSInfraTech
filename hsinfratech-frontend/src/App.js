import React, { useState } from 'react';
import HSInfratechHomepage from './components/HSInfratechHomepage';
import CCTVServicePage from './components/CCTVServicePage';
import PEBStructuresPage from './components/PEBStructuresPage';
import ITNetworkingPage from './components/ITNetworkingPage';
import FireAlarmPage from './components/FireAlarmPage';
import BiometricPage from './components/BiometricPage';
import PublicAddressPage from './components/PublicAddressPage';
import ShedFabricationPage from './components/ShedFabricationPage';
import ConsultationForm from './components/ConsultationForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'cctv-service':
        return <CCTVServicePage setCurrentPage={setCurrentPage} />;
      case 'peb-structures':
        return <PEBStructuresPage setCurrentPage={setCurrentPage} />;
      case 'it-networking':
        return <ITNetworkingPage setCurrentPage={setCurrentPage} />;
      case 'fire-alarm-system':
        return <FireAlarmPage setCurrentPage={setCurrentPage} />;
      case 'biometric-access-control':
        return <BiometricPage setCurrentPage={setCurrentPage} />;
      case 'public-address-system':
        return <PublicAddressPage setCurrentPage={setCurrentPage} />;
      case 'shed-fabricators':
        return <ShedFabricationPage setCurrentPage={setCurrentPage} />;
      case 'consultation-form':
        return <ConsultationForm setCurrentPage={setCurrentPage} />;
      default:
        return <HSInfratechHomepage setCurrentPage={setCurrentPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
