function ButtonIcon({ onClick, className, children, variation, text }) {
  const primary =
    "text-color_primary hover:bg-color_primary hover:text-color_white ";
  const secondary =
    "text-color_grey hover:bg-color_grey_light hover:text-color_white ";
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full bg-white p-2 ${className ? className : ""} ${variation === "secondary" ? secondary : primary}`}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
