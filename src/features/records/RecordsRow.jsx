import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import { MdModeEdit } from "react-icons/md";
import { HiTrash, HiMinusCircle, HiCheckCircle } from "react-icons/hi2";
import CreateUserForm from "../users/CreateUserForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteUser } from "../users/useDeleteUser";

function RecordsRow({ user, index }) {
  const { name, lot, amount, count, status, pending, id } = user;

  const { deleteUser } = useDeleteUser();

  return (
    <div className="grid grid-cols-[40px_1.8fr_1fr_1fr_1fr_28px] items-center px-4 py-3 text-center text-sm  text-color_primary md:grid-cols-[40px_1.8fr_1fr_1fr_1fr_1fr_1fr_28px]">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-300">
        {index + 1}
      </div>
      <div className="flex flex-col text-left">
        <div className="font-semibold capitalize ">{name}</div>
        <div className="text-color_grey before:content-['Lot:-'] md:hidden ">
          {lot}
        </div>
      </div>
      <div className="hidden md:block"> {lot} </div>
      <h1 className="hidden md:block"> {amount} </h1>
      <h1 className=""> {count} </h1>
      <h1 className="font-bold"> {pending} </h1>
      <div
        className={`flex items-center justify-center font-medium uppercase `}
      >
        <span className="lg:hidden">
          {status === "waiting" ? (
            <HiMinusCircle size={22} color="#34d399" />
          ) : (
            <HiCheckCircle size={22} color="#f87171" />
          )}
        </span>
        <span
          className={`hidden rounded-md px-3 py-1 lg:block ${status === "waiting" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-700"}`}
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
            <CreateUserForm userToEdit={user} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="User"
              onConfirm={() => deleteUser(id)}
            />
          </Modal.Window>
        </Modal>
      </Menu>
    </div>
  );
}

export default RecordsRow;
