function Input({ type, className, register, id, ...props }) {
  return (
    <>
      {register ? (
        <input
          type={type}
          className={` rounded-md border px-4 py-2 hover:text-color_primary disabled:bg-color_grey_light disabled:text-color_text  ${className}`}
          {...register(id)}
          {...props}
        />
      ) : (
        <input
          type={type}
          required
          className={` rounded-md border px-4 py-2 hover:text-color_primary  ${className}`}
          {...props}
        />
      )}
    </>
  );
}

export default Input;
