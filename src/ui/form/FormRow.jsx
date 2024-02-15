function FormRow({ children, label, error }) {
  return (
    <div
      className={`grid items-center gap-1 p-2 ${error ? "md:pb-8 lg:pb-2" : ""} md:relative md:grid-cols-[1fr_1.5fr] md:gap-3 lg:grid-cols-[1fr_1fr_1.2fr]`}
    >
      {label && (
        <label className="text-color_primary" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="bottom-2 right-20 text-red-700 md:absolute lg:static lg:pl-5">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormRow;
