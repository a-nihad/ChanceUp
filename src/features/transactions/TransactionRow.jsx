import { format } from "date-fns";
import TableRow from "../../ui/table/TableRow";
import ProfilePic from "../../ui/ProfilePic";

function TransactionRow({ transaction, settings }) {
  const {
    members: { image, name, lot },
    payment_type,
    instalment_count,
    created_at,
  } = transaction;

  const date = format(created_at, "dd/LL/yyyy - p");

  return (
    <TableRow
      type="transaction"
      className="grid-cols-[3fr_.8fr_.8fr] text-center md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:grid-cols-[1.2fr_1.5fr_1fr_1fr_1fr]"
    >
      <h1 className="hidden text-left lg:flex ">{date}</h1>

      <div className="flex items-center gap-3 ">
        <ProfilePic image={image} />
        <div className="text-left">
          <b>{name}</b>
          <h1 className="text-xs lg:hidden">{date}</h1>
        </div>
      </div>
      <b>{instalment_count}</b>
      <h1
        className={
          payment_type === "credit" ? "text-[#22c55e]" : "text-[#ef4444]"
        }
      >
        {payment_type === "credit"
          ? lot * settings?.perLotPrice
          : settings?.perLotPrice * settings?.totalInstallment}
      </h1>
      <h1 className=" hidden md:block "> {payment_type} </h1>
    </TableRow>
  );
}

export default TransactionRow;
