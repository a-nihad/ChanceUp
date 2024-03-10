function Form({ children, onSubmit, type }) {
  return (
    <form
      className={
        type === "auth"
          ? "flex w-full max-w-[400px] flex-col gap-3 px-10 lg:max-w-[500px]"
          : type === "form"
            ? "bg-color_white p-5 dark:bg-dark_grey_light sm:px-8 sm:py-5"
            : "grid max-w-[800px] gap-y-3 p-5 sm:grid-cols-2 sm:gap-x-8 lg:p-8 lg:pt-5"
      }
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
