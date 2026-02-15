import { Link } from "react-router";

const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  icon,
  to,
}) => {
  const classes = `
    flex items-center justify-center gap-2 px-6 py-3 rounded-lg
    btn-gradient
    text-white font-semibold shadow-md
    hover:shadow-lg hover:scale-[1.02]
    active:scale-95 transition-all duration-300 ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
