import { useState } from "react";
import Loader from "../../ui/Loader";
import SearchMembers from "../../ui/SearchMembers";
import StyledModal from "../../ui/StyledModal";
import { useMembers } from "../members/useMembers";
import InstalmentCollection from "./InstalmentCollection";

function Collection({ onClose, id, setClose }) {
  const [memberId, setMemberId] = useState(id);
  const { members, isLoading } = useMembers();

  if (isLoading) return <Loader />;

  return (
    <StyledModal>
      {!memberId ? (
        <SearchMembers onMemberId={setMemberId} members={members} />
      ) : (
        <InstalmentCollection
          id={memberId}
          onClose={onClose}
          setClose={setClose}
        />
      )}
    </StyledModal>
  );
}

export default Collection;
