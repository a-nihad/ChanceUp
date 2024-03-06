import Buttion from "./Buttion";

function ConfirmDelete({ resourceName, onClose, onConfirm }) {
  return (
    <div className=" dark:bg-dark_grey_light w-[320px] space-y-3 rounded-lg border bg-white p-5 shadow-lg sm:w-[500px] sm:p-8 dark:border-dark_grey_light">
      <h1 className="text-lg font-semibold md:text-xl dark:text-color_grey ">
        Delete {resourceName}
      </h1>
      <p className="text-sm text-color_text ">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div className="flex justify-end gap-3 ">
        <Buttion variation="secondary" onClick={onClose}>
          Cancel
        </Buttion>
        <Buttion onClick={onConfirm} variation="danger">
          Delete
        </Buttion>
      </div>
    </div>
  );
}

export default ConfirmDelete;
