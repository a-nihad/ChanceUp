import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className="grid h-full place-items-center">
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#3b82f6"
        radius="9"
      />
    </div>
  );
}

export default Loader;
