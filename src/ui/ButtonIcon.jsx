function ButtonIcon({ onClick, children, variation, disabled, className }) {
  const primary =
    "text-color_primary hover:bg-color_primary border hover:text-color_white border-color_primary ";
  const secondary =
    "text-color_grey hover:bg-color_grey border hover:text-color_white border-color_grey ";
  const special_Primary =
    "text-color_text border hover:text-color_primary hover:border-color_primary ";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`cursor-pointer rounded-full bg-white p-2 ${variation === "secondary" ? secondary : variation === "special_Primary" ? special_Primary : primary} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
