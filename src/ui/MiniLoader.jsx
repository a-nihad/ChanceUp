import { RotatingLines } from "react-loader-spinner";

function MiniLoader() {
  return (
    <div className="grid h-full place-items-center">
      <RotatingLines
        visible={true}
        height="25"
        width="25"
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}

export default MiniLoader;
