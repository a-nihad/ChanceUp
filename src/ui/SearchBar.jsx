import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputValue = searchParams.get("search");

  const handleChange = (value) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-color_primary">
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
