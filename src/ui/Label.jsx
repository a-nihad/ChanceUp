function Label({ id, children }) {
  return (
    <label className="text-color_text" htmlFor={id}>
      {children}
    </label>
  );
}

export default Label;
