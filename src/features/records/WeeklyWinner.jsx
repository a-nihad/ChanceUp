import { useState } from "react";
import { useMembers } from "../members/useMembers";
import SearchMembers from "../../ui/SearchMembers";
import StyledModal from "../../ui/StyledModal";
import Loader from "../../ui/Loader";
import Winner from "./Winner";

function WeeklyWinner({ onClose }) {
  const [memberId, setMemberId] = useState("");
  const { members, isLoading } = useMembers();

  if (isLoading) return <Loader />;
  const remainingMembres = members.filter((member) => member.status !== "done");

  return (
    <StyledModal className="items-center">
      {!memberId ? (
        <SearchMembers onMemberId={setMemberId} members={remainingMembres} />
      ) : (
        <Winner id={memberId} onClose={onClose} />
      )}
    </StyledModal>
  );
}

export default WeeklyWinner;
