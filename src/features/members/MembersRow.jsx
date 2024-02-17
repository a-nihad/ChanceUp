import { MdModeEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import Modal from "../../ui/Modal";
import Menu from "../../ui/Menu";
import { useDeleteMember } from "./useDeleteMember";
import CreateMemberForm from "./CreateMemberForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import ButtonIcon from "../../ui/ButtonIcon";

function MembersRow({ member, index }) {
  const { name, phone, email, place, address, id } = member;

  const { deleteMember } = useDeleteMember();

  return (
    <div className="hover:bg-color_grey_light grid grid-cols-[40px_2fr_1fr_0.7fr_28px] items-center px-4 py-3 text-sm text-color_text hover:text-color_primary md:grid-cols-[40px_1.5fr_1.8fr_1fr_1.2fr_28px] lg:grid-cols-[40px_1.5fr_1.8fr_1.2fr_1.2fr_1.8fr_28px]">
      <h1 className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-300">
        {index + 1}
      </h1>
      <div className="overflow-hidden">
        <h1 className="font-semibold capitalize text-color_primary ">{name}</h1>
        <h1 className="md:hidden ">{email}</h1>
      </div>
      <h1 className="hidden md:block"> {email} </h1>
      <h1 className="text-center capitalize sm:text-left"> {place} </h1>
      <h1 className="flex items-center justify-center capitalize md:hidden  ">
        <ButtonIcon variation="secondary">
          <FaPhoneAlt />
        </ButtonIcon>
      </h1>
      <h1 className="hidden md:block"> {phone} </h1>
      <h1 className="hidden capitalize lg:block"> {address} </h1>

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
              resourceName="member"
              onConfirm={() => deleteMember(id)}
            />
          </Modal.Window>
        </Modal>
      </Menu>
    </div>
  );
}

export default MembersRow;
