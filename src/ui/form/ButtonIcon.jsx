function ButtonIcon({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full bg-white p-2 text-color_primary hover:bg-color_primary hover:text-color_white ${className ? className : ""} `}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
