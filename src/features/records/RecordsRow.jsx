import { MdModeEdit } from "react-icons/md";
import { HiTrash, HiMinusCircle, HiCheckCircle } from "react-icons/hi2";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import CreateMemberForm from "../members/CreateMemberForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteMember } from "../members/useDeleteMember";

function RecordsRow({ member, index }) {
  const { name, lot, amount, instalment, status, pending, lotCount, id } =
    member;

  const { deleteMember } = useDeleteMember();

  return (
    <div className="hover:bg-color_grey_light grid grid-cols-[40px_1.8fr_1fr_1fr_1fr_28px] items-center px-4 py-3 text-center text-sm text-color_text hover:text-color_primary md:grid-cols-[40px_1.8fr_1fr_1fr_1fr_1fr_1fr_28px] lg:grid-cols-[40px_1.8fr_1fr_1fr_1fr_1fr_1fr_1fr_28px]">
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
            <Modal.Open windowName="edit">
              <Menu.Button>
                <MdModeEdit size={20} /> Edit
              </Menu.Button>
            </Modal.Open>

            <Modal.Open windowName="delete">
              <Menu.Button>
                <HiTrash size={20} /> Delete
              </Menu.Button>
            </Modal.Open>
          </Menu.List>

          <Modal.Window name="edit">
            <CreateMemberForm memberToEdit={member} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="Member"
              onConfirm={() => deleteMember(id)}
            />
          </Modal.Window>
        </Modal>
      </Menu>
    </div>
  );
}

export default RecordsRow;
