import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaUser } from "react-icons/fa";

function SearchMembers({ onMemberId, members }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  function handleClick(id) {
    onMemberId(id);
    searchParams.set("search", "");
    setSearchParams(searchParams);
  }
  return (
    <>
      <SearchBar />
      {search && (
        <div className="flex w-full flex-col justify-start rounded-xl border bg-white p-2 ">
          {members.map((member) => (
            <button
              key={member.id}
              className="flex items-center gap-2 rounded-lg p-1 px-2 capitalize text-color_text hover:bg-color_grey_light hover:text-color_primary"
              onClick={() => handleClick(member.id)}
            >
              <FaUser />
              {member.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchMembers;
