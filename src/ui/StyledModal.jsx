import ProfilePic from "./ProfilePic";

function StyledModal({ children, icon, image, name, form, className }) {
  return (
    <div
      className={` rounded-lg border border-color_grey_light shadow-lg dark:border-dark_grey_light
       ${
         form
           ? "no-scrollbar z-50 mx-5 overflow-y-scroll sm:m-0"
           : "flex w-max flex-col gap-2 bg-color_light p-8 dark:bg-dark_grey_light"
       } ${className} `}
    >

      {icon && <span className="text-color_text">{icon}</span>}
      {image && (
        <div className="flex flex-col items-center gap-2">
          <ProfilePic image={image} modal={true} />
          <h1 className="font-semibold capitalize dark:text-color_grey ">
            {name}
          </h1>
        </div>
      )}
      {children}
    </div>
  );
}

export default StyledModal;
