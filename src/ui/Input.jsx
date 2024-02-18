function Input({ type, className, register, id, ...props }) {
  return <input type={type} className={` border py-2 px-4 rounded-md hover:text-color_primary  ${className}`} {...register(id)}  {...props} />;
}

export default Input;
