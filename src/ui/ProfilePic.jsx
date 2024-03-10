function ProfilePic({ image, modal }) {
  return (
    <img
      src={image}
      alt="profile-pic"
      className={
        modal
          ? "h-16 w-16 rounded-full object-cover object-center outline outline-2 outline-offset-2 outline-color_grey dark:outline-color_text"
          : "h-9 w-9 rounded-full border border-color_grey_light object-cover object-center"
      }
    />
  );
}

export default ProfilePic;
