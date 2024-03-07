function FormInput({ register, id, className, ...props }) {
  return (
    <input
      className={`rounded-md border border-color_grey bg-transparent px-4 py-2 text-color_text dark:border-color_text outline-none dark:placeholder:text-color_text sm:placeholder:text-transparent ${className ? className : ""} `}
      {...register(id)}
      {...props}
    />
  );
}

export default FormInput;
