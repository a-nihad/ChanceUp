import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useMembers } from "./useMembers";
import Loader from "../../ui/Loader";
import MembersRow from "./MembersRow";
import Pagination from "../../ui/Pagination";

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
      <header className="sticky top-16 hidden grid-cols-[45px_2fr_1fr_0.7fr_28px] rounded-lg bg-color_primary px-4 py-3 text-sm font-semibold text-color_white sm:grid md:grid-cols-[45px_1.5fr_1.8fr_1fr_1.2fr_28px] lg:grid-cols-[45px_1.5fr_1.8fr_1.2fr_1.2fr_1.8fr_28px] ">
        <div></div>
        <h1 className="">Name</h1>
        <h1 className="hidden md:block ">Email</h1>
        <h1>Place</h1>
        <h1 className="text-center md:text-left ">Phone</h1>
        <h1 className="hidden lg:block ">Address</h1>
        <div></div>
      </header>

      {members.map((member) => (
        <div key={member.id}>
          <MembersRow member={member} />
        </div>
      ))}

      {<Pagination count={dataCount} />}
    </>
  );
}

export default MembersTable;
