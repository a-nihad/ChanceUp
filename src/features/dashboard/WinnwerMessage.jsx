import Today from "../../ui/Today";

function WinnwerMessage({ settings }) {
  return (
    <div className="relative flex flex-col justify-center rounded-xl bg-color_blue_light p-4 text-xl text-color_primary dark:bg-dark_white sm:p-8">
      <h1 className="dark:text-color_grey">
        Winner
        <span className="px-1 font-semibold uppercase ">{settings.winner}</span>
      </h1>

      <img
        src="/gift.png"
        alt="gift-box"
        className="absolute right-2 z-10 w-28 dark:opacity-50 sm:right-5 sm:top-[-15px] sm:w-48"
      />
      <Today className="md:text-base" />
    </div>
  );
}

export default WinnwerMessage;
