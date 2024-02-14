import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Operations({ filterField, options, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(filterField) || defaultValue;
  const ref = useOutsideClick(() => setIsOpen(false));

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
    setIsOpen(false);
  };

  return (
    <div ref={ref}>
      <button
        className=" flex w-44 cursor-pointer justify-between rounded-full bg-white px-4 py-2 text-color_primary_text"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="capitalize"> {value} </span>
        {isOpen ? (
          <IoIosArrowDropupCircle size={22} />
        ) : (
          <IoIosArrowDropdownCircle size={22} />
        )}
      </button>

      {isOpen && (
        <div className="absolute mt-1 flex w-36 flex-col divide-y-2 rounded-xl bg-white p-3">
          {options.map((option) => {
            return (
              <button
                className="py-2 text-color_primary_text hover:bg-color_primary hover:text-color_white"
                key={option.label}
                onClick={() => handleClick(option.value)}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Operations;
