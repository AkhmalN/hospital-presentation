import React from "react";
import Button from "./Button";

const CallToActionSection: React.FC = () => {
  return (
    <section id="cta" className="bg-blue-600 text-white py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Hospital Management?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          See our application in action. Schedule a personalized demo or contact
          us for more information.
        </p>
        {/* Option 1: Simple Button (e.g., links to a contact page or mailto) */}

        {/* Option 2: Basic Contact Form (Requires state management) */}

        <form className="max-w-xl mx-auto mt-8 text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-100 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded bg-blue-500 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-blue-100 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="w-full p-3 rounded bg-blue-500 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your Company Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-100 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-blue-500 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your Email"
            />
          </div>
          <div className="text-center">
            <Button variant="light">
              <a href="mailto:sales@yourcompany.com?subject=Demo Request for Hospital App">
                Request a Demo
              </a>
              {/* Or link to a contact page: <a href="/contact">Contact Us</a> */}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CallToActionSection;
