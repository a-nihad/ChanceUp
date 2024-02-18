function FormRow({ children, label, error }) {
  return (
    <div className="grid items-center p-2">
      {label && (
        <label
          className={`hidden text-base text-color_text sm:block`}
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
