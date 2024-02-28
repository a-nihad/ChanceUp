import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoverPassword } from "./useRecoverPassword";
import BackButtion from "../../ui/BackButtion";
import Buttion from "../../ui/Buttion";
import AuthHeader from "./AuthHeader";
import Input from "../../ui/Input";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const recoverPassword = useRecoverPassword();

  function handleSubmit(e) {
    e.preventDefault();
    recoverPassword(email);
    navigate("/login", { replace: true });
  }

  return (
    <>
      <AuthHeader
        heading="Recover your password"
        message="You'll recive an email to recover your password"
      />
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[400px] flex-col gap-3 px-10 lg:max-w-[500px] "
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Buttion className=""> Send </Buttion>
      </form>
      <BackButtion />
    </>
  );
}

export default ForgotPassword;
