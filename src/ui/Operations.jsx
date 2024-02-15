import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Operations({ filterField, options, defaultValue, icon }) {
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
    <div ref={ref} className="relative">
      <button
        className=" flex cursor-pointer items-center justify-between rounded-full bg-white p-3 text-color_primary_text md:w-32 md:px-4 md:py-2 lg:w-44"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`hidden capitalize md:block lg:hidden `}>
          {defaultValue}
        </span>
        <span className={`hidden capitalize lg:block`}> {value} </span>
        {isOpen ? <IoIosArrowDropupCircle /> : icon}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-1 flex w-36 flex-col divide-y-2 rounded-xl bg-white p-3 sm:left-0">
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
