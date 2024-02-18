import EditSettingsForm from "../features/settings/EditSettingsForm";

function Settings() {
  return (
    <div className="rounded-xl bg-white border ">
      <div className="flex flex-col gap-2">
        <h1 className="rounded-t-lg bg-color_primary px-4 sm:px-8 py-2 text-lg text-color_light ">
          Wallet Settings
        </h1>
        <EditSettingsForm />
      </div>
    </div>
  );
}

export default Settings;
