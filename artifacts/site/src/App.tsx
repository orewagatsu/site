import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/home";
import BusinessEnglishPage from "./components/BusinessEnglishPage";
import RegularCommunicationsPage from "./components/RegularCommunicationsPage";
import InterculturalConsultingPage from "./components/InterculturalConsultingPage";
import ContactPage from "./components/ContactPage";
import HomeJA from "./components/HomeJA";
import BusinessEnglishPageJA from "./components/BusinessEnglishPageJA";
import RegularCommunicationsPageJA from "./components/RegularCommunicationsPageJA";
import InterculturalConsultingPageJA from "./components/InterculturalConsultingPageJA";
import ContactPageJA from "./components/ContactPageJA";
import PricingPage from "./components/PricingPage";
import PricingPageJA from "./components/PricingPageJA";
import BlogPage from "./components/BlogPage";
import BlogPageJA from "./components/BlogPageJA";

function App() {
  return (
    <HelmetProvider>
      <NavigationBar />
      <Routes>
        {/* English Routes */}
        <Route path="/en" element={<Home />} />
        <Route path="/en/" element={<Home />} />
        <Route path="/en/business-english" element={<BusinessEnglishPage />} />
        <Route path="/en/regular-communications" element={<RegularCommunicationsPage />} />
        <Route path="/en/business-consulting" element={<InterculturalConsultingPage />} />
        <Route path="/en/pricing" element={<PricingPage />} />
        <Route path="/en/contact" element={<ContactPage />} />
        <Route path="/en/blog" element={<BlogPage />} />
        <Route path="/en/intercultural-consulting" element={<InterculturalConsultingPage />} />

        {/* Japanese Routes (Default) */}
        <Route path="/" element={<HomeJA />} />
        <Route path="/business-english" element={<BusinessEnglishPageJA />} />
        <Route path="/regular-communications" element={<RegularCommunicationsPageJA />} />
        <Route path="/business-consulting" element={<InterculturalConsultingPageJA />} />
        <Route path="/pricing" element={<PricingPageJA />} />
        <Route path="/contact" element={<ContactPageJA />} />
        <Route path="/blog" element={<BlogPageJA />} />
        <Route path="/intercultural-consulting" element={<InterculturalConsultingPageJA />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;