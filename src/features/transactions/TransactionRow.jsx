import { format } from "date-fns";

function TransactionRow({ transaction, settings }) {
  const {
    members: { image, name, lot },
    payment_type,
    instalment_count,
    created_at,
  } = transaction;

  const date = format(created_at, "dd-LL-yyyy");
  const time = format(created_at, "p");

  return (
    <div className="dark:border-dark_grey_light dark:bg-dark_white grid grid-cols-[3fr_.8fr_.8fr] items-center rounded-lg border border-color_grey_light bg-white px-2 py-2 text-sm capitalize text-color_text hover:bg-color_grey_light hover:text-color_primary sm:px-4 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:grid-cols-[1.2fr_1.5fr_1fr_1fr_1fr]">
      <div className="hidden gap-x-1 text-right md:text-left lg:flex lg:flex-row">
        {date}
        <span className=" justify-end  md:justify-start  ">{time}</span>
      </div>

      <div className="flex items-center gap-3 ">
        <img
          className="h-9 w-9 rounded-full border border-color_grey_light object-cover object-center "
          src={image}
          alt="profile-pic"
        />
        <div>
          <h1 className="font-semibold">{name}</h1>
          <div className="flex gap-x-1 text-right text-xs md:text-left lg:hidden lg:flex-row">
            {date}
            <span className=" justify-end  md:justify-start  ">{time}</span>
          </div>
        </div>
      </div>
      <h1 className="text-center font-semibold  ">
        {instalment_count} {}
      </h1>
      <h1
        className={`text-center  ${payment_type === "credit" ? "text-[#22c55e]" : "text-[#ef4444]"} `}
      >
        {payment_type === "credit"
          ? lot * settings?.perLotPrice
          : settings?.perLotPrice * settings?.totalInstallment}
      </h1>
      <h1 className=" hidden text-center md:block "> {payment_type} </h1>
    </div>
  );
}

export default TransactionRow;
