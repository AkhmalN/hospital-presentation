import React from "react";
import HomePage from "./pages/HomePage";
import FeaturesSection from "./components/FeatureSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToActionSection from "./components/CallActionSection";
import Footer from "./components/Footer";
import "./index.css"; // Ensure Tailwind styles are imported
import { Benefits } from "./components/Benefits";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HomePage />
        <FeaturesSection />
        <Benefits />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
