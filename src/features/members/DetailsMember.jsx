import Row from "../../ui/table/Row";
import Buttion from "../../ui/Buttion";
import StyledModal from "../../ui/StyledModal";

function DetailsMember({ member, onClose }) {
  const { name, phone, email, place, address, image } = member;
  return (
    <StyledModal className="capitalize" image={image} name={name}>
      <Row label="Phone Number" text={phone} />
      <Row label="Email" text={email.split("@")[0]} />
      <Row label="Place" text={place} />
      <span className="rounded-md border p-2 text-sm capitalize text-color_text dark:border-color_dark_text">
        {address}
      </span>

      <Buttion className="min-w-[220px]" onClick={onClose}>
        Cancel
      </Buttion>
    </StyledModal>
  );
}

export default DetailsMember;
