function FormInput({ register, id, className, ...props }) {
  return (
    <input
      className={`rounded-md border border-color_grey bg-transparent px-4 py-2 text-color_text outline-none disabled:bg-color_grey dark:border-color_text dark:placeholder:text-color_text dark:disabled:bg-dark_light sm:placeholder:text-transparent ${className} `}
      {...register(id)}
      {...props}
    />
  );
}

export default FormInput;
