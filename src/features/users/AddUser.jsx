import { FaUserPlus } from "react-icons/fa6";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";
import CreateUserForm from "./CreateUserForm";

function AddUser() {
  return (
    <div>
      <Modal>
        <Modal.Open windowName="user-form">
          <ButtonIcon variation="special_Primary">
            <span className="flex items-center justify-between gap-5 p-1 md:py-0 lg:w-40">
              <span className="hidden md:block"> Add User </span>
              <FaUserPlus size={18} />
            </span>
          </ButtonIcon>
        </Modal.Open>

        <Modal.Window name="user-form">
          <CreateUserForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddUser;
