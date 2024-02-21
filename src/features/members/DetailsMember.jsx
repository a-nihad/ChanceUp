import Buttion from "../../ui/Buttion";

function DetailsMember({ member, onClose }) {
  const { name, phone, email, place, address, image } = member;
  return (
    <div className=" flex w-max flex-col gap-2 rounded-lg border bg-white p-8 text-sm shadow-lg ">
      <div className="flex flex-col items-center gap-2">
        <img
          className="h-16 w-16 rounded-full object-cover object-center outline outline-2 outline-offset-2 outline-color_grey"
          src={image}
          alt="profile-pic"
        />
        <h1 className="text-base font-semibold capitalize">{name}</h1>
      </div>

      <div className="flex justify-between gap-4 text-color_primary">
        <h1 className="text-color_text"> Phone Number </h1> {phone}
      </div>
      <div className="flex justify-between gap-4 text-color_primary">
        <h1 className="text-color_text"> Email </h1> {email.split("@")[0]}
      </div>
      <div className="flex justify-between gap-4 text-color_primary">
        <h1 className="text-color_text"> Place </h1> {place}
      </div>

      <span className="rounded-md border p-2 capitalize text-color_text">
        {address}
      </span>

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

export default DetailsMember;
