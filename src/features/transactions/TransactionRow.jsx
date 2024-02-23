import { format } from "date-fns";

function TransactionRow({ transaction, settings }) {
  const {
    members: { image, name, lot },
    payment_type,
    instalment_count,
    created_at,
  } = transaction;

  const date = format(created_at, "dd-LL-yyyy, EEEE");

  return (
    <div className="grid grid-cols-[1fr_2.2fr_1fr_1.3fr_1fr] items-center px-4 py-3 text-sm text-color_text hover:bg-color_grey_light hover:text-color_primary  md:grid-cols-[1fr_2.2fr_1fr_1.3fr_1fr] lg:grid-cols-[1fr_2.2fr_1fr_1.3fr_1fr]">
      <h1 className=""> {payment_type} </h1>

      <div className="flex items-center gap-3">
        <img
          className="h-8 w-8 rounded-full border border-color_grey_light object-cover object-center "
          src={image}
          alt="profile-pic"
        />
        <h1 className="">{name}</h1>
      </div>
      <h1 className=""> {instalment_count} </h1>
      <h1 className=""> {date} </h1>
      <h1 className=""> {lot * settings?.perLotPrice} </h1>
    </div>
  );
}

export default TransactionRow;
