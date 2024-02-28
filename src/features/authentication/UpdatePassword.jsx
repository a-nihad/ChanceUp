import AuthHeader from "./AuthHeader";
import BackButtion from "../../ui/BackButtion";
import EditPassword from "./EditPassword";

function UpdatePassword() {
  return (
    <>
      <AuthHeader heading="Update your password" />
      <EditPassword type='login' />
    </>
  );
}

export default UpdatePassword;
