import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMembers } from "../features/members/useMembers";
import { useSettings } from "../features/settings/useSettings";
import Loader from "../ui/Loader";
import CheckBox from "../features/instalment/CheckBox";
import Pagination from "../ui/Pagination";

function Installments() {
  const { members, isLoading, dataCount } = useMembers();
  const { settings: { totalInstallment } = {}, settingsLoading } =
    useSettings();

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set("pageSize", 14);
    setSearchParams(searchParams);
  }, []);

  if (isLoading || settingsLoading) return <Loader />;

  return (
    <div className="dark:bg-dark_white w-full overflow-hidden rounded-2xl bg-white">
      <div className="no-scrollbar overflow-x-scroll">
        <header className="dark:bg-dark_primary_dark text-color_lightdark:bg-dark_primary_dark dark:border-dark_grey_light sticky top-0 flex w-max gap-3 rounded-t-xl border bg-color_primary  py-2 dark:text-color_grey ">
          <h1 className="dark:bg-dark_primary_dark sticky left-0 min-w-32 max-w-32 bg-color_primary px-4 lg:min-w-44 ">
            Name
          </h1>
          <div className="flex gap-2 text-sm">
            {Array.from({ length: totalInstallment }, (_, index) => (
              <h2 className="w-[22px] text-center " key={index}>
                {index + 1}
              </h2>
            ))}
          </div>
        </header>

        <main className="dark:divide-dark_grey_light flex w-max flex-col justify-center divide-y py-2  ">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-3 py-2 ">
              <h1 className="dark:bg-dark_white sticky left-0 min-w-32 max-w-32 bg-white px-4 text-sm capitalize lg:min-w-44 dark:text-color_primary">
                {member.name}
              </h1>
              <CheckBox count={totalInstallment} member={member} />
            </div>
          ))}
        </main>
      </div>

      <footer className="dark:border-dark_grey_light rounded-b-2xl border-t ">
        <Pagination count={dataCount} />
      </footer>
    </div>
  );
}

export default Installments;
