import { useSettings } from "../settings/useSettings";
import Buttion from "../../ui/Buttion";
import Loader from "../../ui/Loader";
import StyledModal from "../../ui/StyledModal";
import Row from "../../ui/table/Row";

function DetailsRecords({ member, onClose }) {
  const { name, lot, instalment, status, image, lotCount } = member;
  const { settings: { perLotPrice, currentInstalment } = {}, isLoading } =
    useSettings();

  if (isLoading) return <Loader />;

  return (
    <StyledModal className="capitalize" image={image} name={name}>
      <Row label="Amount" text={lot * perLotPrice} />
      <Row label="Lot Count" text={lotCount} />
      <Row label="Instalment" text={instalment} />
      <Row label="Pending" text={currentInstalment - instalment} />
      <Row label="status" text={status} />

      <Buttion className="mt-3 min-w-[220px]" onClick={onClose}>
        Cancel
      </Buttion>
    </StyledModal>
  );
}

export default DetailsRecords;
