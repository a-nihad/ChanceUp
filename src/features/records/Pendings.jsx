import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsHourglassBottom } from "react-icons/bs";
import { useSettings } from "../settings/useSettings";
import ButtonIcon from "../../ui/ButtonIcon";

function Pendings() {
  const [pending, setPending] = useState(false);
  const togglePending = () => setPending(!pending);

  const [searchParams, setSearchParams] = useSearchParams();
  const { settings: { currentInstalment } = {} } = useSettings();

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
