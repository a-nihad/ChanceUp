import { useSearchParams } from "react-router-dom";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBar({ className }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value) => {
    searchParams.set("search", value.toLowerCase());
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <div className="dark:border-dark_grey_light dark:bg-dark_white flex grow items-center gap-2 rounded-full border border-color_grey_light bg-white px-4 py-2 text-color_text sm:max-w-96 ">
      <HiMiniMagnifyingGlass size={20} />
      <input
        type="text"
        placeholder="Search here..."
        className={`w-[100px] bg-transparent outline-none sm:w-full ${className} `}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
