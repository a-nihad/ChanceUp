import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { IoArrowUndoSharp } from "react-icons/io5";
import ProfilePic from "./ProfilePic";
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
            className="flex items-center justify-between gap-4 rounded-lg border border-color_grey_light bg-white p-2 px-4 capitalize text-color_text hover:bg-color_grey_light hover:text-color_primary dark:border-none dark:bg-dark_white"
            onClick={() => handleClick(member.id)}
          >
            <div className="flex items-center gap-4">
              <ProfilePic image={member.image} />
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
