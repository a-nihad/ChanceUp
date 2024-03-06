function Input({ type, className, register, id, ...props }) {
  return (
    <>
      {register ? (
        <input
          type={type}
          className={` ${type === "name" ? "lowercase" : ""} rounded-md border px-4 py-2 hover:text-color_primary disabled:bg-color_grey_light disabled:text-color_text dark:border-color_text dark:bg-transparent dark:text-color_grey  ${className}`}
          {...register(id)}
          {...props}
        />
      ) : (
        <input
          type={type}
          required
          className={` ${type === "name" ? "lowercase" : ""} rounded-md border px-4 py-2 hover:text-color_primary dark:border-color_text dark:bg-transparent dark:text-color_grey ${className}`}
          {...props}
        />
      )}
    </>
  );
}

export default Input;
