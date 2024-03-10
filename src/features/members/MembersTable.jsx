import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMembers } from "./useMembers";
import TableHeader from "../../ui/table/TableHeader";
import Pagination from "../../ui/Pagination";
import MembersRow from "./MembersRow";
import Loader from "../../ui/Loader";

function MembersTable() {
  const { members, isLoading, dataCount } = useMembers();

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set("pageSize", 15);
    setSearchParams(searchParams);
  }, []);

  if (isLoading) return <Loader />;
  return (
    <>
      <TableHeader className="hidden grid-cols-[45px_2fr_1fr_0.7fr_28px] sm:grid md:grid-cols-[45px_1.5fr_1.8fr_1fr_1.2fr_28px] lg:grid-cols-[45px_1.5fr_1.8fr_1.2fr_1.2fr_1.8fr_28px]">
        <h1></h1>
        <h1>Name</h1>
        <h1 className="hidden md:block ">Email</h1>
        <h1>Place</h1>
        <h1 className="text-center md:text-left ">Phone</h1>
        <h1 className="hidden lg:block ">Address</h1>
        <h1></h1>
      </TableHeader>

      {members.map((member) => (
        <div key={member.id}>
          <MembersRow member={member} />
        </div>
      ))}

      <Pagination count={dataCount} />
    </>
  );
}

export default MembersTable;
