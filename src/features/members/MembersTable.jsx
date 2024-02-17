import { useMembers } from "./useMembers";
import Loader from "../../ui/Loader";
import MembersRow from "./MembersRow";
import Pagination from "../../ui/Pagination";

function MembersTable() {
  const { members, isLoading, dataCount } = useMembers();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="space-y-1 rounded-lg border">
        <header className="sticky top-16 hidden grid-cols-[40px_2fr_1fr_0.7fr_28px] rounded-t-lg bg-color_primary px-4 py-2 text-sm font-semibold text-color_white sm:grid md:grid-cols-[40px_1.5fr_1.8fr_1fr_1.2fr_28px] lg:grid-cols-[40px_1.5fr_1.8fr_1.2fr_1.2fr_1.8fr_28px] ">
          <div></div>
          <h1 className="">Name</h1>
          <h1 className="hidden md:block ">Email</h1>
          <h1>Place</h1>
          <h1 className="text-center md:text-left ">Phone</h1>
          <h1 className="hidden lg:block ">Address</h1>
          <div></div>
        </header>

        <div className="no-scrollbar max-h-[620px] divide-y-4 divide-color_light overflow-y-scroll bg-white ">
          {members.map((member, index) => (
            <MembersRow key={member.id} member={member} index={index} />
          ))}
        </div>

        {<Pagination count={dataCount} />}
      </div>
    </>
  );
}

export default MembersTable;
