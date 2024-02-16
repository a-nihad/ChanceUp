import WalletSettings from "../features/settings/WalletSettings";
import Header from "../ui/Header";

function Settings() {
  return (
    <>
      <Header heading="Settings" />
      <div className="bg-white p-10 rounded-xl ">
        <WalletSettings />
      </div>
    </>
  );
}

export default Settings;
