import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg 
      bg-gradient-to-r from-amber-400 to-orange-500 
      text-white font-semibold shadow-md 
      hover:shadow-lg hover:scale-[1.02] 
      active:scale-95 transition-all duration-300 ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
