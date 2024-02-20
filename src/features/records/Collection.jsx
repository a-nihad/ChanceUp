import { useState } from "react";
import SearchMembers from "../../ui/SearchMembers";
import { useMembers } from "../members/useMembers";
import Loader from "../../ui/Loader";
import InstalmentCollection from "./InstalmentCollection";

function Collection({ onClose, id }) {
  const [memberId, setMemberId] = useState(id);
  const { members, isLoading } = useMembers();

  if (isLoading) return <Loader />;

  return (
    <div className="flex w-max flex-col items-center gap-2 rounded-lg border bg-color_light p-8 pt-12 shadow-lg">
      {!memberId ? (
        <SearchMembers onMemberId={setMemberId} members={members} />
      ) : (
        <InstalmentCollection id={memberId} onClose={onClose} />
      )}
    </div>
  );
}

export default Collection;
