import { FaUserPlus } from "react-icons/fa6";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";
import CreateUserForm from "./CreateUserForm";

function AddUser() {
  return (
    <div>
      <Modal>
        <Modal.Open windowName="user-form">
          <ButtonIcon >
            <FaUserPlus size={22} />
          </ButtonIcon>
        </Modal.Open>

        <Modal.Window name="user-form">
          <CreateUserForm  />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddUser;
