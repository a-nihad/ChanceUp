import AdminLoginForm from "../features/authentication/AdminLoginForm";

function Login() {
  return (
    <div className="h-screen w-screen md:grid md:grid-cols-2 ">
      <div className="m-5 mr-0 hidden flex-col items-center justify-center gap-5 rounded-xl bg-color_primary md:flex lg:flex">
        <h1 className="text-3xl text-white"> Welcome! </h1>
        <img
          src="/banking.png"
          alt="login_png"
          className="w-4/6 text-white lg:w-3/6"
        />
      </div>
      <AdminLoginForm />
    </div>
  );
}

export default Login;
