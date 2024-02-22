function StatusBox({ icon, title, value, color, side }) {
  return (
    <div
      className={`flex ${side === "right" ? "flex-row-reverse md:flex-row" : ""}  items-center gap-2 rounded-xl sm:gap-4 bg-color_${color}_light p-3`}
    >
      <h1
        className={`row-span-full flex aspect-square items-center justify-center rounded-full bg-white p-2 text-2xl sm:p-3 sm:text-3xl text-color_${color}`}
      >
        {icon}
      </h1>
      <div
        className={`text-sm ${side === "right" ? "text-right md:text-left" : ""}`}
      >
        <h1 className="font-semibold uppercase text-color_text ">{title}</h1>
        <h1 className="text-lg font-bold sm:text-2xl "> {value} </h1>
      </div>
    </div>
  );
}

export default StatusBox;
