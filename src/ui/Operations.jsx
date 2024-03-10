import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Operations({ filterField, options, defaultValue, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const ref = useOutsideClick(() => setIsOpen(false));
  const value = searchParams.get(filterField) || defaultValue;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        className="flex cursor-pointer items-center justify-between rounded-full border border-color_grey_light bg-white p-3 text-color_text hover:border-color_primary hover:text-color_primary dark:border-dark_grey_light dark:bg-dark_white dark:text-color_text dark:hover:border-color_text md:w-32 md:px-4 md:py-2 lg:w-44"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`hidden capitalize md:block lg:hidden `}>
          {defaultValue}
        </span>
        <span className={`hidden capitalize lg:block`}> {value} </span>
        {isOpen ? <IoIosArrowDropupCircle /> : icon}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-1 flex w-36 flex-col divide-y rounded-xl border border-color_grey_light bg-white p-3 shadow-lg dark:divide-color_text dark:border-dark_grey_light dark:bg-dark_light sm:left-0">
          {options.map((option) => (
            <button
              className="py-2 text-color_text hover:bg-color_grey_light hover:text-color_primary dark:rounded-md dark:hover:bg-dark_white dark:hover:text-color_text "
              key={option.label}
              onClick={() => handleClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Operations;
