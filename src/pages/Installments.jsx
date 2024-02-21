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
    <div className="w-full overflow-hidden rounded-2xl bg-white">
      <div className="no-scrollbar overflow-x-scroll">
        <header className="sticky top-0 flex w-max gap-3 rounded-t-xl border bg-color_primary py-2 text-color_light">
          <h1 className="sticky left-0 min-w-32 max-w-32 bg-color_primary px-4 lg:min-w-44 ">
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

        <main className="flex w-max flex-col justify-center divide-y divide-dashed py-2  ">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-3 py-2 ">
              <h1 className="sticky left-0 min-w-32 max-w-32 bg-white px-4 text-sm capitalize lg:min-w-44">
                {member.name}
              </h1>
              <CheckBox count={totalInstallment} member={member} />
            </div>
          ))}
        </main>
      </div>

      <footer className="rounded-b-2xl border-t ">
        <Pagination count={dataCount} />
      </footer>
    </div>
  );
}

export default Installments;
