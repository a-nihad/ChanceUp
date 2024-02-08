function FormRow({ children, label, error }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1.2fr] items-center gap-5 p-2" >
      {label && <label className="text-color_primary" htmlFor={children.props.id}> {label} </label>}
      {children}
      {error && <span className="text-red-700"> {error} </span>}
    </div>
  );
}

export default FormRow;
