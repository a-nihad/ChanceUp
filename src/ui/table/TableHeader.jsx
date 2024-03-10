function TableHeader({ className, children, form }) {
  return (
    <header
      className={`bg-color_primary font-semibold text-color_light dark:bg-dark_primary_dark dark:text-color_grey ${form ? "sticky top-0 p-3 text-lg dark:border-b dark:border-color_primary_dark sm:px-5" : "sticky top-16 rounded-lg px-4 py-3 text-sm font-semibold "} ${className} `}
    >
      {children}
    </header>
  );
}

export default TableHeader;
