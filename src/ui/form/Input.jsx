function Input({ register, id, ...props }) {
  return (
    <input
      {...register(id, { required: "This field is require" })}
      className="rounded-md border border-color_primary bg-transparent px-4 py-2"
      {...props}
    />
  );
}

export default Input;
