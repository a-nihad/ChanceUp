import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSettings } from "../settings/useSettings";
import { useMembers } from "../../features/members/useMembers";
import TableHeader from "../../ui/table/TableHeader";
import Pagination from "../../ui/Pagination";
import RecordsRow from "./RecordsRow";
import Loader from "../../ui/Loader";

function RecordsTable() {
  const { members, isLoading, dataCount } = useMembers();
  const { settings, settingsLoading } = useSettings();

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set("pageSize", 15);
    setSearchParams(searchParams);
  }, []);

  if (isLoading || settingsLoading) return <Loader />;

  return (
    <>
      <div className="space-y-1 rounded-lg">
        <TableHeader className="hidden grid-cols-[45px_1.8fr_1fr_1fr_1fr_28px] text-center sm:grid md:grid-cols-[45px_1.8fr_1fr_1fr_1fr_1fr_1fr_28px] lg:grid-cols-[45px_1.8fr_1fr_1fr_1fr_1fr_1fr_1fr_28px]">
          <h1></h1>
          <h1 className="text-left">Name</h1>
          <h1 className="hidden md:block">Lots</h1>
          <h1 className="hidden md:block">Amount</h1>
          <h1>Instalment</h1>
          <h1>Pending</h1>
          <h1 className="hidden lg:block">Lot Count</h1>
          <h1>Status</h1>
          <div></div>
        </TableHeader>

        {members.map((member) => (
          <div key={member.id}>
            <RecordsRow member={member} settings={settings} />
          </div>
        ))}

        <Pagination count={dataCount} />
      </div>
    </>
  );
}

export default RecordsTable;
