import SettingsLayout from "../features/settings/SettingsLayout";
import EditPassword from "../features/authentication/EditPassword";
import EditSettingsForm from "../features/settings/EditSettingsForm";

function Settings() {
  return (
    <div className="flex flex-col gap-5 text-sm sm:text-base ">
      <SettingsLayout heading="Wallet Settings">
        <EditSettingsForm />
      </SettingsLayout>

      <SettingsLayout heading="Change Password">
        <EditPassword />
      </SettingsLayout>
    </div>
  );
}

export default Settings;
