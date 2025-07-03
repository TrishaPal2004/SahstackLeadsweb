import './index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Navbar from './components/nav';
import MobileLayout from './components/MobileLayout';
import DesktopLayout from './components/DesktopLayout';

import Home from './Pages/Home';
import Packs from './Pages/Packs';
import HowItWorks from './Pages/Howitworks';
import WhyChooseUs from './Pages/WhyChooseUs.js';
import Paymentpage from './Pages/Paymentpage.js';
import CustomLeads from './Pages/CustomLeads.js';
import Contact from './Pages/Contact.js';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const AppRoutes = (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Packs />
            <HowItWorks />
            <WhyChooseUs />
            <CustomLeads />
            <Contact />
          </>
        }
      />
      <Route path="/packages" element={<Packs />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/Payment" element={<Paymentpage />} />
      <Route path="/custom-leads" element={<CustomLeads />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );

  return (
    <BrowserRouter>
    
      {isMobile ? (
        <MobileLayout>
          <Navbar />
          {AppRoutes}
        </MobileLayout>
      ) : (
        <>
          
          <DesktopLayout>
            <Navbar />
            {AppRoutes}
          </DesktopLayout>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
