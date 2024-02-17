import { useMembers } from "../../features/members/useMembers";
import Loader from "../../ui/Loader";
import RecordsRow from "./RecordsRow";
import Pagination from "../../ui/Pagination";

function RecordsTable() {
  const { members, isLoading, dataCount } = useMembers();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="space-y-1 rounded-lg border">
        <header className="sticky top-16 hidden grid-cols-[40px_1.8fr_1fr_1fr_1fr_28px] rounded-t-lg bg-color_primary px-4  py-2 text-center text-sm font-semibold text-color_light sm:grid md:grid-cols-[40px_1.8fr_1fr_1fr_1fr_1fr_1fr_28px] lg:grid-cols-[40px_1.8fr_1fr_1fr_1fr_1fr_1fr_1fr_28px]">
          <h1></h1>
          <h1 className="text-left">Name</h1>
          <h1 className="hidden md:block">Lots</h1>
          <h1 className="hidden md:block">Amount</h1>
          <h1>Instalment</h1>
          <h1>Pending</h1>
          <h1 className="hidden lg:block">Lot Count</h1>
          <h1>Status</h1>
          <div></div>
        </header>

        <div className="no-scrollbar max-h-[620px] divide-y-4 divide-color_white overflow-y-scroll bg-white ">
          {members.map((member, index) => (
            <RecordsRow key={member.id} member={member} index={index} />
          ))}
        </div>

        <Pagination count={dataCount} />
      </div>
    </>
  );
}

export default RecordsTable;
