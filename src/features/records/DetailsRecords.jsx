import { useSettings } from "../settings/useSettings";
import Buttion from "../../ui/Buttion";
import Loader from "../../ui/Loader";

function DetailsRecords({ member, onClose }) {
  const { name, lot, instalment, status, image, lotCount } = member;
  const { settings: { perLotPrice, currentInstalment } = {}, isLoading } =
    useSettings();

  if (isLoading) return <Loader />;

  return (
    <div className=" flex w-max  flex-col gap-2 rounded-lg border bg-white p-8 text-sm shadow-xl ">
      <div className="flex flex-col items-center gap-2">
        <img
          className="h-16 w-16 rounded-full object-cover object-center outline outline-2 outline-offset-2 outline-color_grey"
          src={image}
          alt="profile-pic"
        />
        <h1 className="text-base font-semibold capitalize ">{name}</h1>
      </div>

      <div className="flex justify-between gap-4 text-color_primary">
        <h1 className="text-color_text"> Lot Count </h1> {lotCount}
      </div>
      <div className="flex justify-between gap-4 text-color_primary">
        <h1 className="text-color_text"> Amount </h1> {lot * perLotPrice}
      </div>
      <div className="flex justify-between gap-4 text-color_primary">
        <h1 className="text-color_text"> status </h1> {status}
      </div>
      <div className="flex justify-between gap-4 text-color_primary">
        <h1 className="text-color_text"> Instalment </h1> {instalment}
      </div>
      <div className="flex justify-between gap-4 text-color_primary">
        <h1 className="text-color_text"> Pending </h1>{" "}
        {currentInstalment - instalment}
      </div>

      <Buttion
        variation="primary"
        className="mt-3 min-w-[220px]"
        onClick={onClose}
      >
        Cancel
      </Buttion>
    </div>
  );
}

export default DetailsRecords;
