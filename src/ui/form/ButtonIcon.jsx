function ButtonIcon({ children }) {
  return (
    <button className="cursor-pointer rounded-full bg-white p-2 text-color_primary hover:bg-color_primary hover:text-color_white">
      {children}
    </button>
  );
}

export default ButtonIcon;
