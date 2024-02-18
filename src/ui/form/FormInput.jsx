function FormInput({ register, id, required, className, ...props }) {
  const style = `rounded-md border text-color_text border-color_grey bg-transparent px-4 py-2 sm:placeholder:text-transparent ${className ? className : ""} `;
  return (
    <>
      {required ? (
        <input
          {...register(id, { required: "This field is require" })}
          className={style}
          {...props}
        />
      ) : (
        <input {...register(id)} className={style} {...props} />
      )}
    </>
  );
}

export default FormInput;
