import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "light";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 hover:cursor-pointer";
  let variantStyles;

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500";
      break;
    case "secondary":
      variantStyles =
        "bg-indigo-100 text-indigo-500 hover:bg-indigo-300 focus:ring-indigo-400";
      break;
    case "light":
      variantStyles =
        "bg-transparent text-white hover:outline transition duration-700 ease-in-out";
      break;
    default:
      break;
  }
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
