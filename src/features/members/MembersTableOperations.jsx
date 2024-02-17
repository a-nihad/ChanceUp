import { FaSortAlphaDownAlt } from "react-icons/fa";
import Operations from "../../ui/Operations";
import SearchBar from "../../ui/SearchBar";
import AddMember from "./AddMember";

function MembersTableOperations() {
  return (
    <div className="flex items-center justify-between gap-5">
      <SearchBar />
      <div className="flex items-center gap-2">
        <AddMember />
        <Operations
          defaultValue="Sort by"
          filterField="sortBy"
          options={[
            { label: "Sort by (A-Z)", value: "name-asc" },
            { label: "Sort by (Z-A)", value: "name-des" },
          ]}
          icon={<FaSortAlphaDownAlt />}
        />
      </div>
    </div>
  );
}

export default MembersTableOperations;
