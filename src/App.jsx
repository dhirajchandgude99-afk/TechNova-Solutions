import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LayoutStyle2 from "./components/layout/LayoutStyle2";
import LayoutStyle3 from "./components/layout/LayoutStyle3";
import ScrollTopOnLoad from "./components/ScrollTopOnLoad";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ServicesPage from "./pages/Service/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetails/ServiceDetailsPage";
import TeamPage from "./pages/Team/TeamPage";
import TeamDetailsPage from "./pages/TeamDetails/TeamDetailsPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTopOnLoad />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />         
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team-details" element={<TeamDetailsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />          
          <Route path="/testimonials" element={<TestimonialsPage />} />          
          <Route path="*" element={<NotFoundPage />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
