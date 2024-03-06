import EditPassword from "../features/authentication/EditPassword";
import EditSettingsForm from "../features/settings/EditSettingsForm";

function Settings() {
  return (
    <div className="flex flex-col gap-5 text-sm sm:text-base ">
      <div className="dark:border-dark_grey_light flex flex-col gap-2 rounded-xl border border-color_grey_light bg-white dark:bg-dark_white ">
        <h1 className="dark:bg-dark_primary_dark rounded-t-lg bg-color_primary px-4 py-2 text-base text-color_light sm:px-8 sm:text-lg dark:text-color_grey ">
          Wallet Settings
        </h1>
        <EditSettingsForm />
      </div>

      <div className="dark:border-dark_grey_light flex flex-col gap-2 rounded-xl border border-color_grey_light bg-white dark:bg-dark_white">
        <h1 className="dark:bg-dark_primary_dark rounded-t-lg bg-color_primary px-4 py-2 text-base text-color_light sm:px-8 sm:text-lg dark:text-color_grey ">
          Change Password
        </h1>
        <EditPassword />
      </div>
    </div>
  );
}

export default Settings;
