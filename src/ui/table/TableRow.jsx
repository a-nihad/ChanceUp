function TableRow({ children, className, type }) {
  const style =
    "grid rounded-lg border border-color_grey_light bg-white text-color_text hover:bg-color_grey_light hover:text-color_primary dark:border-dark_grey_light dark:bg-dark_white";
  return (
    <div
      className={
        type === "transaction"
          ? `${style} items-center px-2 py-2 text-sm capitalize sm:px-4 ${className} `
          : `${style} grid-cols-[1fr_28px] px-4 `
      }
    >
      {children}
    </div>
  );
}

export default TableRow;
