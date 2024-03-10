function Row({ label, text }) {
  return (
    <div className="flex justify-between gap-4 text-sm text-color_primary">
      <h1 className="text-color_text"> {label} </h1> {text}
    </div>
  );
}

export default Row;
