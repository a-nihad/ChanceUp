function Input({ register, id, required, ...props }) {
  const className =
    "rounded-md border border-color_primary bg-transparent px-4 py-2";
  return (
    <>
      {required ? (
        <input
          {...register(id, { required: "This field is require" })}
          className={className}
          {...props}
        />
      ) : (
        <input {...register(id)} className={className} {...props} />
      )}
    </>
  );
}

export default Input;
