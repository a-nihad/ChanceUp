import Buttion from "./Buttion";

function ConfirmDelete({ resourceName, onClose, onConfirm }) {
  return (
    <div className=" w-[320px] space-y-3 rounded-lg border border-color_grey_light bg-white p-5 shadow-lg dark:border-dark_grey_light dark:bg-dark_grey_light sm:w-[460px] sm:p-8">
      <h1 className="text-lg font-semibold dark:text-color_grey md:text-xl ">
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
        <Buttion variation="danger" onClick={onConfirm}>
          Delete
        </Buttion>
      </div>
    </div>
  );
}

export default ConfirmDelete;
