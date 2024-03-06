import { useState } from "react";
import { useMembers } from "../members/useMembers";
import SearchMembers from "../../ui/SearchMembers";
import Loader from "../../ui/Loader";
import Winner from "./Winner";

function WeeklyWinner({ onClose }) {
  const [memberId, setMemberId] = useState("");
  const { members, isLoading } = useMembers();

  if (isLoading) return <Loader />;

  const remainingMembres = members.filter((member) => member.status !== "done");

  return (
    <div className="flex w-max flex-col items-center gap-2 rounded-lg border bg-color_light dark:bg-dark_grey_light dark:border-dark_grey_light p-8 shadow-lg">
      {!memberId ? (
        <SearchMembers onMemberId={setMemberId} members={remainingMembres} />
      ) : (
        <Winner id={memberId} onClose={onClose} />
      )}
    </div>
  );
}

export default WeeklyWinner;
