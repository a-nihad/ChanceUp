import MembersTable from "../features/members/MembersTable";
import MembersTableOperations from "../features/members/MembersTableOperations";

function Members() {
  return (
    <div className="flex flex-col gap-3">
      <MembersTableOperations />
      <MembersTable />
    </div>
  );
}

export default Members;
