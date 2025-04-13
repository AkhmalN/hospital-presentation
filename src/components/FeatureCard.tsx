import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode; // Can be an SVG component, <img>, or icon font class
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center md:items-start md:text-left">
      <div className="text-blue-600 mb-4 text-4xl rounded-lg bg-blue-50 p-1 ring-4 ring-blue-50">
        {/* Icon wrapper */}
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
