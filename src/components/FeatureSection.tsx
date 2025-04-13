import React from "react";
import FeatureCard from "./FeatureCard";
import {
  CalendarSearch,
  ChartArea,
  HandCoins,
  NotepadTextDashed,
  Stethoscope,
  Tablets,
} from "lucide-react";

const features = [
  {
    icon: <ChartArea />, // Replace with specific icons
    title: "Dashboard Analytics",
    description:
      "Get a real-time overview of patient data, key performance metrics, and actionable insights to drive informed decisions.",
  },
  {
    icon: <HandCoins />, // Replace with specific icons
    title: "Payroll Management",
    description:
      "Simplify complex payroll processing for all staff members, ensuring accuracy and compliance with ease.",
  },
  {
    icon: <Stethoscope />, // Replace with specific icons
    title: "Inpatient Management",
    description:
      "Efficiently track patient admissions, bed assignments, transfers, and discharge processes in one centralized system.",
  },
  {
    icon: <Tablets />, // Replace with specific icons
    title: "Pharmacy Management",
    description:
      "Manage prescriptions, drug inventory, dispensing records, and interactions checks to enhance patient safety.",
  },
  {
    icon: <CalendarSearch />, // Replace with specific icons
    title: "Appointment Scheduling",
    description:
      "Streamline patient appointment booking, manage doctor schedules, and send automated reminders.",
  },
  {
    icon: <NotepadTextDashed />, // Replace with specific icons
    title: "Billing & Invoicing",
    description:
      "Automate billing processes, generate accurate invoices, and manage insurance claims efficiently.",
  },
  // Add more features as needed
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Powerful Features Built for You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our application comes packed with tools to enhance every aspect of
            hospital management.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
