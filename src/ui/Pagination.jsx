import { useSearchParams } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export const PAGE_SIZE = 9;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center rounded-b-lg bg-white p-3 px-10 md:justify-between ">
      <p className="hidden w-96 text-color_grey md:block ">
        Showing
        <span className="font-bold"> {(currentPage - 1) * PAGE_SIZE + 1} </span>
        to
        <span className="px-1 font-bold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>
        of
        <span className="font-bold"> {count} </span>
        results.
      </p>
      <div className="flex w-full justify-between gap-2 md:justify-end">
        <ButtonIcon
          onClick={prevPage}
          disabled={currentPage === 1}
          variation={currentPage === 1 && "secondary"}
        >
          <span className="flex pr-2">
            <IoMdArrowDropleft size={25} />
            Previous
          </span>
        </ButtonIcon>
        <ButtonIcon
          onClick={nextPage}
          disabled={currentPage === pageCount}
          variation={currentPage === pageCount && "secondary"}
        >
          <span className="flex pl-2">
            Next <IoMdArrowDropright size={25} />
          </span>
        </ButtonIcon>
      </div>
    </div>
  );
}

export default Pagination;
