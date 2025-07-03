import logo from './logo.svg';
import './index';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Packs from './Pages/Packs';
import HowItWorks from './Pages/Howitworks';
import WhyChooseUs from './Pages/WhyChooseUs.js';
import Paymentpage from './Pages/Paymentpage.js';
import CustomLeads from './Pages/CustomLeads.js';
import Contact from './Pages/Contact.js';
function App() {
  return (
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<>
    <Home />
    <Packs />
    <HowItWorks />
    <WhyChooseUs/>
    <CustomLeads />
    <Contact />
  </>} />
      <Route path="/packages" element={<Packs />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/Payment" element={<Paymentpage />} />
      <Route path="/custom-leads" element={<CustomLeads />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
     </Routes>
     </BrowserRouter>

  );
}

export default App;
