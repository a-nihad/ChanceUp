import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { IoArrowUndoSharp } from "react-icons/io5";
import SearchBar from "./SearchBar";

function SearchMembers({ onMemberId, members }) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set("pageSize", 7);
    setSearchParams(searchParams);
  }, []);

  function handleClick(id) {
    onMemberId(id);
    searchParams.set("search", "");
    searchParams.set("pageSize", 15);
    setSearchParams(searchParams);
  }
  return (
    <>
      <SearchBar className="md:[w-350px] w-[170px] sm:w-[220px] " />

      <div className="rounded-x flex w-full flex-col justify-start gap-2 ">
        {members.map((member) => (
          <button
            key={member.id}
            className="flex items-center justify-between gap-4 rounded-lg bg-white dark:bg-dark_white p-2 px-4 capitalize text-color_text hover:bg-color_grey_light hover:text-color_primary"
            onClick={() => handleClick(member.id)}
          >
            <div className="flex items-center gap-4">
              <img
                className="h-9 w-9 rounded-full object-cover object-center "
                src={member.image}
                alt="profile-pic"
              />
              {member.name}
            </div>

            <IoArrowUndoSharp />
          </button>
        ))}
      </div>
    </>
  );
}

export default SearchMembers;
