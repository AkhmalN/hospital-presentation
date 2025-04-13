import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialImage1 from "../assets/user-dummy.png";
import testimonialImage2 from "../assets/user-dummy.png";
import testimonialImage3 from "../assets/user-dummy.png";

const testimonials = [
  {
    quote:
      "This application revolutionized how we manage patient flow. The dashboard gives us insights we never had before.",
    name: "Dr. Emily Carter",
    title: "Chief Medical Officer, St. Jude's Hospital",
    imageSrc: testimonialImage1, // Use actual image path or placeholder
  },
  {
    quote:
      "Payroll used to take days; now it's done in hours. The accuracy and ease of use are phenomenal.",
    name: "David Lee",
    title: "HR Manager, City General Hospital",
    imageSrc: testimonialImage2, // Use actual image path or placeholder
  },
  {
    quote:
      "Managing pharmacy inventory is so much simpler now. We've reduced waste and improved dispensing times significantly.",
    name: "Sarah Chen",
    title: "Head Pharmacist, Mercy Medical Center",
    imageSrc: testimonialImage3, // Use actual image path or placeholder
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from healthcare professionals who trust our
            application.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
