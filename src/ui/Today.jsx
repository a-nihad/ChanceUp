import { format } from "date-fns";

function Today({ className }) {
  return (
    <span className={`text-sm text-color_text ${className}`}>
      {format(new Date(), `dd LLLL yyyy - EEEE`)}
    </span>
  );
}

export default Today;
