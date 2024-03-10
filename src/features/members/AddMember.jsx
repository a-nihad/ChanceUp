import { FaUserPlus } from "react-icons/fa6";
import CreateMemberForm from "./CreateMemberForm";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";

function AddMember() {
  return (
    <div>
      <Modal>
        <Modal.Open windowName="crate_member">
          <ButtonIcon variation="special_Primary">
            <span className="flex items-center justify-between gap-5 p-1 md:py-0 lg:w-40">
              <span className="hidden md:block"> Add Member </span>
              <FaUserPlus size={18} />
            </span>
          </ButtonIcon>
        </Modal.Open>

        <Modal.Window name="crate_member" className="right-7 sm:right-2">
          <CreateMemberForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddMember;
