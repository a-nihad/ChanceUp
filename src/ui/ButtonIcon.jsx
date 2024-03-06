function ButtonIcon({ onClick, children, variation, disabled, className }) {
  const primary =
    "text-color_primary dark:text-color_primary hover:bg-color_primary dark:hover:bg-text-color_primary border hover:text-color_white dark:hover:text-dark_white border-color_primary dark:border-dark_primary_dark ";
  const secondary =
    "text-color_grey hover:bg-color_grey border dark:border-color_text hover:text-color_white border-color_grey dark:hover:bg-dark_light ";
  const special =
    "bg-color_primary dark:bg-text-color_primary text-color_white dark:text-dark_white hover:text-color_primary dark:hover:text-color_primary hover:bg-white dark:hover:bg-dark_white border border-color_primary dark:border-dark_primary_dark ";
  const special_Primary =
    "text-color_text bg-white dark:bg-dark_white border border-color_grey_light dark:border-dark_grey_light hover:text-color_primary dark:hover:text-color_text hover:border-color_primary dark:hover:border-color_text ";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`cursor-pointer rounded-full p-2 ${variation === "secondary" ? secondary : variation === "special_Primary" ? special_Primary : variation === "special" ? special : primary} ${className ? className : ""} `}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
