import Buttion from "./Buttion";

function ConfirmDelete({ resourceName, onClose, onConfirm }) {
  return (
    <div className="w-[500px] space-y-3 rounded-lg bg-white p-10 shadow-lg">
      <h1 className="text-xl font-semibold"> Delete {resourceName} </h1>
      <p className="text-color_grey">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div className="flex justify-end gap-3">
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
