function FormRow({ children, label, error, className, type }) {
  return (
    <div
      className={`grid items-center ${type === "secondary" ? "grid-cols-2 sm:grid-cols-none" : ""} ${className} `}
    >
      {label && (
        <label
          className={` ${type === "secondary" ? "text-sm" : "hidden"} text-color_text sm:block sm:text-base`}
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-color_red">{error}</span>}
    </div>
  );
}

export default FormRow;
