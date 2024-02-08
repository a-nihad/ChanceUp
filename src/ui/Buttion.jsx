function Buttion({ children, onClick, disabled, variation = "primary", ...props }) {
  const primary =
    "bg-color_primary text-color_white hover:bg-color_primary_dark";
  const secondary = "border border-color_secondary_text hover:bg-color_light";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-4 py-2 ${variation === "secondary" ? secondary : primary}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Buttion;
