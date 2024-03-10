import { HiTrash } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useDeleteMember } from "./useDeleteMember";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateMemberForm from "./CreateMemberForm";
import TableRow from "../../ui/table/TableRow";
import ButtonIcon from "../../ui/ButtonIcon";
import ProfilePic from "../../ui/ProfilePic";
import DetailsMember from "./DetailsMember";
import Modal from "../../ui/Modal";
import Menu from "../../ui/Menu";

function MembersRow({ member }) {
  const { name, phone, email, place, address, image, id } = member;
  const { deleteMember } = useDeleteMember();

  return (
    <TableRow>
      <Modal>
        <Modal.Open windowName="details">
          <div className="grid grid-cols-[45px_2fr_1fr_0.7fr] items-center py-2 text-sm capitalize  md:grid-cols-[45px_1.5fr_1.8fr_1fr_1.2fr] lg:grid-cols-[45px_1.5fr_1.8fr_1.2fr_1.2fr_1.8fr]">
            <ProfilePic image={image} />
            <div className="overflow-hidden">
              <h1 className="font-semibold text-color_primary">{name}</h1>
              <h1 className="lowercase md:hidden ">{email}</h1>
            </div>
            <h1 className="hidden lowercase md:block"> {email} </h1>
            <h1> {place} </h1>
            <h1 className="flex items-center justify-center md:hidden  ">
              <ButtonIcon variation="secondary">
                <FaPhoneAlt />
              </ButtonIcon>
            </h1>
            <h1 className="hidden md:block"> {phone} </h1>
            <h1 className="hidden lg:block"> {address} </h1>
          </div>
        </Modal.Open>
        <Modal.Window name="details" className="hidden">
          <DetailsMember member={member} />
        </Modal.Window>
      </Modal>

      <div className="flex items-center justify-center">
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
    </TableRow>
  );
}

export default MembersRow;
