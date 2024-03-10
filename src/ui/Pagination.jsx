import { useSearchParams } from "react-router-dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import ButtonIcon from "./ButtonIcon";

function Pagination({ count, className }) {
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
    <div
      className={`flex items-center rounded-b-2xl bg-white p-3 dark:bg-dark_white md:justify-between md:px-10 ${className} `}
    >
      <aside className="hidden w-96 text-color_text md:block ">
        Showing
        <b> {(currentPage - 1) * PAGE_SIZE + 1} </b>
        to
        <b> {currentPage === pageCount ? count : currentPage * PAGE_SIZE} </b>
        of
        <b> {count} </b>
        results.
      </aside>

      <div className="flex w-full justify-between gap-2 md:justify-end">
        <ButtonIcon
          onClick={prevPage}
          disabled={currentPage === 1}
          variation={currentPage === 1 && "secondary"}
          className={currentPage === 1 ? "cursor-no-drop" : ""}
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
          className={currentPage === pageCount ? "cursor-no-drop" : ""}
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
