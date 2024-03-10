import AuthHeader from "./AuthHeader";
import EditPassword from "./EditPassword";

function UpdatePassword() {
  return (
    <>
      <AuthHeader heading="Update your password" />
      <EditPassword type="auth" />
    </>
  );
}

export default UpdatePassword;
