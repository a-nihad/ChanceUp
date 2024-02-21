import { useState } from "react";
import { useMembers } from "../members/useMembers";
import InstalmentCollection from "./InstalmentCollection";
import SearchMembers from "../../ui/SearchMembers";
import Loader from "../../ui/Loader";

function Collection({ onClose, id }) {
  const [memberId, setMemberId] = useState(id);
  const { members, isLoading } = useMembers();

  if (isLoading) return <Loader />;

  return (
    <div className="flex w-max flex-col items-center gap-2 rounded-lg border bg-color_light p-8 shadow-lg">
      {!memberId ? (
        <SearchMembers onMemberId={setMemberId} members={members} />
      ) : (
        <InstalmentCollection id={memberId} onClose={onClose} />
      )}
    </div>
  );
}

export default Collection;
