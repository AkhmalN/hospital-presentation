import React from "react";
import Button from "../components/Button";
import appScreenshot from "../assets/hospital.jpg";
// Assume you have an image in public/images/app-screenshot.png or src/assets/
// import appScreenshot from '../assets/app-screenshot.png'; // if using src/assets

const HomePage: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-blue-50 via-white to-white"
    >
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Modern Healthcare
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-500">
          Management System
        </h1>
        <div className="w-full flex justify-center items-center align-middle mt-5">
          <p className="text-lg md:text-xl text-gray-600 mb-8 w-1/2">
            Streamline your hospital operations with our comprehensive
            management solution. Enhance patient care, optimize workflows, and
            improve efficiency across all departments.
          </p>
        </div>
        <Button
          onClick={() =>
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More
        </Button>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Introducing HealthFlow Pro
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            HealthFlow Pro is a comprehensive hospital management application
            built to simplify complex workflows, enhance collaboration between
            departments, and ultimately improve patient outcomes. From admission
            to discharge, manage every aspect seamlessly.
          </p>
          <Button
            variant="secondary"
            onClick={() =>
              document
                .getElementById("cta")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request a Demo
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src={appScreenshot} // Use the imported variable or public path
            alt="Hospital Application Screenshot"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
            // Add appropriate width/height constraints if needed
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
