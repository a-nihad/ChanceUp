import { HiMinusCircle, HiCheckCircle } from "react-icons/hi2";
import { GiReceiveMoney } from "react-icons/gi";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import Collection from "./Collection";
import DetailsRecords from "./DetailsRecords";

function RecordsRow({ member, settings }) {
  const { name, lot, instalment, status, image, lotCount, id } = member;
  const { perLotPrice, currentInstalment } = settings || {};

  const pending = currentInstalment - instalment;
  const amount = lot * perLotPrice;

  return (
    <div className="dark:border-dark_grey_light dark:bg-dark_white grid grid-cols-[1fr_28px] rounded-lg border border-color_grey_light bg-white px-4  text-color_text hover:bg-color_grey_light hover:text-color_primary">
      <Modal>
        <Modal.Open windowName="details">
          <div className="grid grid-cols-[45px_1.8fr_1fr_1fr_1fr] items-center py-2 text-center text-sm md:grid-cols-[45px_1.8fr_1fr_1fr_1fr_1fr_1fr] lg:grid-cols-[45px_1.8fr_1fr_1fr_1fr_1fr_1fr_1fr]">
            <img
              className="h-9 w-9 rounded-full object-cover object-center"
              src={image}
              alt="profile-pic"
            />
            <div className="flex flex-col text-left">
              <h1 className="font-semibold capitalize text-color_primary ">
                {name}
              </h1>
              <h1 className="text-color_grey before:content-['Lot:-'] md:hidden ">
                {lot}
              </h1>
            </div>
            <h1 className="hidden md:block"> {lot} </h1>
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
          </div>
        </Modal.Open>
        <Modal.Window name="details" className="hidden">
          <DetailsRecords member={member} />
        </Modal.Window>
      </Modal>

      <div className="flex items-center justify-center">
        <Menu>
          <Modal>
            <Menu.Toggle id={id} />

            <Menu.List id={id}>
              <Modal.Open windowName="collection">
                <Menu.Button>
                  <GiReceiveMoney size={20} /> Collection
                </Menu.Button>
              </Modal.Open>
            </Menu.List>

            <Modal.Window name="collection">
              <Collection id={id} />
            </Modal.Window>
          </Modal>
        </Menu>
      </div>
    </div>
  );
}

export default RecordsRow;
