import MembersTable from "../features/members/MembersTable";
import MembersTableOperations from "../features/members/MembersTableOperations";

function Members() {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-y-3">
      <MembersTableOperations />
      <MembersTable />
    </div>
  );
}

export default Members;
