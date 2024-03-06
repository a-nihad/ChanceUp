import { useSearchParams } from "react-router-dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import ButtonIcon from "./ButtonIcon";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const PAGE_SIZE = searchParams.get("pageSize");
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
    <div className="dark:bg-dark_white flex items-center rounded-b-2xl bg-white p-3 md:justify-between md:px-10 ">
      <p className="hidden w-96 text-color_text md:block ">
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
          className={
            currentPage === 1 ? "cursor-default" : ""
          }
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
          className={
            currentPage === pageCount
              ? "cursor-default"
              : ""
          }
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
