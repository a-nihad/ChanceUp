function Buttion({
  children,
  onClick,
  disabled,
  variation = "primary",
  className,
  ...props
}) {
  const primary =
    "bg-color_primary dark:bg-dark_primary_dark text-color_white hover:bg-color_primary_dark dark:hover:bg-color_primary";
  const secondary =
    "border hover:bg-color_grey dark:text-color_grey dark:hover:text-black ";
  const danger =
    "bg-color_red dark:bg-color_red_dark text-color_white hover:bg-color_red_dark dark:hover:bg-color_red ";

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
