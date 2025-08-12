import React, { useState, useEffect } from 'react';
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

  // Function to navigate and update browser history
  const navigateToPage = (page) => {
    setCurrentPage(page);
    // Update browser history
    window.history.pushState({ page }, '', `/${page === 'home' ? '' : page}`);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        // Default to home if no state
        setCurrentPage('home');
      }
    };

    // Set initial history state
    window.history.replaceState({ page: 'home' }, '', '/');

    // Listen for browser navigation
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'cctv-service':
        return <CCTVServicePage setCurrentPage={navigateToPage} />;
      case 'peb-structures':
        return <PEBStructuresPage setCurrentPage={navigateToPage} />;
      case 'it-networking':
        return <ITNetworkingPage setCurrentPage={navigateToPage} />;
      case 'fire-alarm-system':
        return <FireAlarmPage setCurrentPage={navigateToPage} />;
      case 'biometric-access-control':
        return <BiometricPage setCurrentPage={navigateToPage} />;
      case 'public-address-system':
        return <PublicAddressPage setCurrentPage={navigateToPage} />;
      case 'shed-fabricators':
        return <ShedFabricationPage setCurrentPage={navigateToPage} />;
      case 'consultation-form':
        return <ConsultationForm setCurrentPage={navigateToPage} />;
      default:
        return <HSInfratechHomepage setCurrentPage={navigateToPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
