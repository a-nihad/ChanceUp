import { useState } from "react";
import { BsHourglassBottom } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import ButtonIcon from "../../ui/ButtonIcon";
import { useSettings } from "../settings/useSettings";

function Pendings() {
  const [pending, setPending] = useState(false);
  const togglePending = () => setPending(!pending);

  const [searchParams, setSearchParams] = useSearchParams();

  const { settings: { currentInstalment } = {}, isLoading } = useSettings();

  function handleClick() {
    if (pending) searchParams.set("pending", "");
    else searchParams.set("pending", currentInstalment);
    setSearchParams(searchParams);
    togglePending();
  }

  return (
    <ButtonIcon
      variation={pending ? "primary" : "special_Primary"}
      onClick={handleClick}
    >
      <div className="flex items-center gap-5 px-1 lg:px-2">
        <span className="hidden lg:block"> Pending </span>
        <BsHourglassBottom />
      </div>
    </ButtonIcon>
  );
}

export default Pendings;
