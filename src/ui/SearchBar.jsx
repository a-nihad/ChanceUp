import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value) => {
    searchParams.set("search", value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-color_primary grow max-w-96 ">
      <HiMiniMagnifyingGlass size={20} />
      <input
        type="text"
        placeholder="Search here..."
        className="outline-none"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
