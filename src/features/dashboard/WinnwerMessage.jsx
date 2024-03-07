import { format } from "date-fns";

function WinnwerMessage({ settings }) {
  return (
    <div className="relative flex flex-col justify-center rounded-xl bg-color_blue_light dark:bg-dark_white p-4 text-xl text-color_primary sm:p-8">
      <h1 className="capitalize dark:text-color_grey" >
        Winner
        <span className="px-1 font-semibold uppercase ">{settings.winner}</span>
      </h1>
      <img
        src="/gift.png"
        alt="gift-box"
        className="absolute dark:opacity-50 right-2 z-10 w-28 sm:right-5 sm:top-[-15px] sm:w-48"
      />
      <span className=" text-xs text-color_text md:text-base">
        {format(new Date(), `yyyy LLLL dd - EEEE`)}
      </span>
    </div>
  );
}

export default WinnwerMessage;
