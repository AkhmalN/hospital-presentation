import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc?: string; // Optional image source
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  imageSrc,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-md mx-auto">
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
