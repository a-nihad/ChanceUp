import { HiMinusCircle, HiCheckCircle } from "react-icons/hi2";
import { GiReceiveMoney } from "react-icons/gi";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import { useSettings } from "../settings/useSettings";
import Collection from "./Collection";

function RecordsRow({ member, index }) {
  const { name, lot, instalment, status, lotCount, id } = member;
  const { settings: { perLotPrice, currentInstalment } = {}, isLoading } =
    useSettings();

  const pending = currentInstalment - instalment;
  const amount = lot * perLotPrice;

  return (
    <div className="grid grid-cols-[40px_1.8fr_1fr_1fr_1fr_28px] items-center px-4 py-3 text-center text-sm text-color_text hover:bg-color_grey_light hover:text-color_primary md:grid-cols-[40px_1.8fr_1fr_1fr_1fr_1fr_1fr_28px] lg:grid-cols-[40px_1.8fr_1fr_1fr_1fr_1fr_1fr_1fr_28px]">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-300">
        {index + 1}
      </div>
      <div className="flex flex-col text-left">
        <div className="font-semibold capitalize text-color_primary ">
          {name}
        </div>
        <div className="text-color_grey before:content-['Lot:-'] md:hidden ">
          {lot}
        </div>
      </div>
      <div className="hidden md:block"> {lot} </div>
      <h1 className="hidden md:block"> {amount} </h1>
      <h1 className=""> {instalment} </h1>
      <h1 className="font-bold"> {pending} </h1>
      <h1 className="hidden lg:block"> {lotCount} </h1>
      <div
        className={`flex items-center justify-center font-medium uppercase `}
      >
        <span className="lg:hidden">
          {status === "waiting" ? (
            <HiMinusCircle size={22} color="#0369a1" />
          ) : status === "holding" ? (
            <HiMinusCircle size={22} color="#a16207" />
          ) : (
            <HiCheckCircle size={22} color="#15803d" />
          )}
        </span>
        <span
          className={`hidden rounded-md px-3 py-1 lg:block ${status === "waiting" ? "bg-color_blue_light text-color_blue" : status === "holding" ? "bg-color_yellow_light text-color_yellow" : "bg-color_green_light text-color_green"}`}
        >
          {status}
        </span>
      </div>

      <Menu>
        <Modal>
          <Menu.Toggle id={id} />

          <Menu.List id={id}>
            <Modal.Open windowName="collection" >
              <Menu.Button>
                <GiReceiveMoney size={20} /> Collection
              </Menu.Button>
            </Modal.Open>
          </Menu.List>

          <Modal.Window name="collection" >
            <Collection id={id} />
          </Modal.Window>
        </Modal>
      </Menu>
    </div>
  );
}

export default RecordsRow;
