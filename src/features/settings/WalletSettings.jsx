import EditSettingsForm from "./EditSettingsForm";

function WalletSettings() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className=" border-b-2 pb-4 text-xl  text-color_primary_dark ">
        Wallet Settings
      </h1>
      <EditSettingsForm />
    </div>
  );
}

export default WalletSettings;
