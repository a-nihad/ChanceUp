import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useLogin } from "./useLogin";
import MiniLoader from "../../ui/MiniLoader";
import Buttion from "../../ui/Buttion";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import AuthHeader from "./AuthHeader";

function AdminLoginForm() {
  const [email, setEmail] = useState("sulaimanalungal410@gmail.com");
  const [password, setPassword] = useState("000000");
  const [show, setShow] = useState(false);

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    login(
      { email, password },
      {
        onSettled: () => {
          setPassword("");
        },
        onError: () => toast.error("Inorrect email or password"),
      },
    );
  }

  return (
    <>
      <AuthHeader
        heading="Admin login"
        message="Login to your admin account to manage"
      />

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[400px] flex-col gap-3 px-10 lg:max-w-[500px] "
      >
        <div className="flex flex-col">
          <Label id="email"> Email address </Label>
          <Input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative flex flex-col">
          <Label id="password"> Password </Label>
          <Input
            type={`${show ? "text" : "password"}`}
            id="password"
            placeholder="Enter password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="absolute bottom-3 right-3 text-color_text"
            onClick={() => setShow(!show)}
          >
            {show ? <HiEyeSlash size={20} /> : <HiEye size={20} />}
          </span>
        </div>
        <Buttion className=""> {isLoading ? <MiniLoader /> : "Login"} </Buttion>
        <Link
          to="/forgotPassword"
          className="relative bottom-2 text-right text-color_text"
        >
          Forgot Password
        </Link>
      </form>
    </>
  );
}

export default AdminLoginForm;
