import { useState } from "react";
import { toast } from "react-hot-toast";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { IoWallet } from "react-icons/io5";
import { useLogin } from "./useLogin";
import MiniLoader from "../../ui/MiniLoader";
import Buttion from "../../ui/Buttion";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

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
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <header className="flex flex-col items-center">
        <span className="text-color_primary">
          <IoWallet size={60} />
        </span>
        <h1 className="text-left text-xl font-semibold lg:text-2xl">
          Admin login
        </h1>
      </header>

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
      </form>
    </div>
  );
}

export default AdminLoginForm;
