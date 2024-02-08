function UsersRow({ user, index }) {
  const { fullName, phone, lot, amount, count, status } = user;

  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_1.3fr_1fr_1fr_1fr_1fr] items-center px-6 py-3 text-sm text-color_primary">
      <div> {index + 1} </div>
      <div className="font-semibold"> {fullName} </div>
      <div> {phone} </div>
      <div> {lot} </div>
      <div> {amount} </div>
      <div className="font-semibold"> {count} </div>
      <div
        className={` w-fit rounded-md px-3 py-1 font-medium uppercase  ${status === "pending" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-700"}`}
      >
        {status}
      </div>
    </div>
  );
}

export default UsersRow;
