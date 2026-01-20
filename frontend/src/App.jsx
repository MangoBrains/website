import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Systems from "./components/Systems";
import Process from "./components/Process";
import Industries from "./components/Industries";
import TechSecurity from "./components/TechSecurity";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/process" element={<Process />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/tech" element={<TechSecurity />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsOfUse/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>

      <Footer />
    </>
  );
}
