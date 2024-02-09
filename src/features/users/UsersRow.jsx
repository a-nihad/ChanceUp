import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import { MdModeEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import CreateUserForm from "./CreateUserForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteUser } from "./useDeleteUser";

function UsersRow({ user, index }) {
  const { name, phone, lot, amount, count, status, id } = user;

  const { deleteUser } = useDeleteUser();

  return (
    <div className="grid grid-cols-[0.3fr_1.8fr_1.3fr_1fr_1fr_1fr_1fr_0.1fr] items-center px-6 py-3 text-sm text-color_primary">
      <div> {index + 1} </div>
      <div className="font-semibold"> {name} </div>
      <div> {phone} </div>
      <div> {lot} </div>
      <div> {amount} </div>
      <div className="font-semibold"> {count} </div>
      <div
        className={` w-fit rounded-md px-3 py-1 font-medium uppercase  ${status === "pending" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-700"}`}
      >
        {status}
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

export default UsersRow;
