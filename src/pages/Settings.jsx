import UpdatePassword from "../features/authentication/UpdatePassword";
import EditSettingsForm from "../features/settings/EditSettingsForm";

function Settings() {
  return (
    <div className="flex flex-col gap-5 text-sm sm:text-base ">
      <div className="flex flex-col gap-2 rounded-xl border border-color_grey_light bg-white ">
        <h1 className="rounded-t-lg bg-color_primary px-4 py-2 text-base text-color_light sm:px-8 sm:text-lg ">
          Wallet Settings
        </h1>
        <EditSettingsForm />
      </div>

      <div className="flex flex-col gap-2 rounded-xl border border-color_grey_light bg-white">
        <h1 className="rounded-t-lg bg-color_primary px-4 py-2 text-base text-color_light sm:px-8 sm:text-lg ">
          Change Password
        </h1>
        <UpdatePassword />
      </div>
    </div>
  );
}

export default Settings;
