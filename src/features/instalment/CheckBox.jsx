import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";

function CheckBox({ count, member }) {
  return (
    <div className="flex gap-2 text-color_grey dark:text-color_dark_text ">
      {Array.from({ length: count }, (_, index) =>
        index >= member.instalment ? (
          <h2 key={index}> {<MdCheckBoxOutlineBlank size={22} />} </h2>
        ) : (
          <h2 key={index} className="text-color_primary">
            {<IoCheckbox size={22} />}
          </h2>
        ),
      )}
    </div>
  );
}

export default CheckBox;
