function StatusBox({ icon, title, value, color, side }) {
  return (
    <div
      className={`flex ${side === "right" ? "flex-row-reverse md:flex-row" : ""} dark:bg-dark_white  items-center gap-2 rounded-xl p-3  sm:gap-4 ${color === "indigo" ? "bg-color_indigo_light" : color === "red" ? "bg-color_red_light" : `bg-color_${color}_light`} `}
    >
      <h1
        className={`dark:bg-color_dark_text dark:text-color_grey row-span-full flex aspect-square items-center justify-center rounded-full bg-white p-2 text-2xl sm:p-3 sm:text-3xl ${color === "indigo" ? "text-color_indigo" : `text-color_${color}`} `}
      >
        {icon}
      </h1>
      <div
        className={`text-sm ${side === "right" ? "text-right md:text-left" : ""}`}
      >
        <h1 className="font-semibold uppercase text-color_text ">{title}</h1>
        <h1 className="text-lg font-bold sm:text-2xl dark:text-color_grey  "> {value} </h1>
      </div>
    </div>
  );
}

export default StatusBox;
