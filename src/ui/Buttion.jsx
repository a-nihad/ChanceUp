function Buttion({
  children,
  onClick,
  disabled,
  variation = "primary",
  className,
  ...props
}) {
  const primary =
    "bg-color_primary text-color_white hover:bg-color_primary_dark";
  const secondary = "border hover:bg-color_grey";
  const danger = "bg-color_red text-color_white hover:bg-color_red_dark";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-6 py-2 ${className}  ${variation === "secondary" ? secondary : variation === "danger" ? danger : primary}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Buttion;
