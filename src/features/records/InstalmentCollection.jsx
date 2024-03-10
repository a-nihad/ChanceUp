import emailjs from "@emailjs/browser";
import { useCreatetransaction } from "../transactions/useCreatetransaction";
import { useEditMember } from "../members/useEditMember";
import { useSettings } from "../settings/useSettings";
import { useMember } from "../members/useMember";
import ProfilePic from "../../ui/ProfilePic";
import MiniLoader from "../../ui/MiniLoader";
import Buttion from "../../ui/Buttion";
import Loader from "../../ui/Loader";
import Today from "../../ui/Today";

function InstalmentCollection({ id, onClose, setClose }) {
  const { isLoading, member } = useMember(id);
  const { settings, isLoading: settingsLoading } = useSettings();
  const { editMember, isPending } = useEditMember();
  const { createTransaction } = useCreatetransaction();

  if (isLoading || settingsLoading) return <Loader />;

  function handleClick() {
    editMember(
      {
        newMember: { ...member, instalment: member.instalment + 1 },
        id: member.id,
      },
      {
        onSuccess: () => {
          onClose();
          setClose();
        },
      },
    );
    createTransaction({
      payment_type: "credit",
      instalment_count: member.instalment + 1,
      member_id: member.id,
    });

    // EmailJS
    const SERVICE_ID = "service_oi3mujc";
    const TEMPLATE_ID = "template_6bwi81s";
    const PUBLIC_KEY = "f2iUsqsk9W9-AfMle";

    // Create a new object that contains dynamic template params
    const template_params = {
      reply_to: member.email,
      user_name: member.name.toUpperCase(),
      message: `I have received the ${member.instalment + 1}th installment of Rs ${member.lot * settings.perLotPrice}.`,
    };

    // Send the email using EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, template_params, PUBLIC_KEY)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("Error Sending email:", error);
      });
  }

  return (
    <div className="flex flex-col items-center gap-2 text-color_text ">
      <ProfilePic image={member.image} modal={true} />
      <h1 className="font-bold capitalize text-black dark:text-color_grey">
        {member.name}
      </h1>

      <div className=" text-center text-sm">
        <p>
          {member.name.toUpperCase()}'s lot is
          <span className="font-bold"> {member.lot} </span>
        </p>
        <p> Current instalment :- {member.instalment + 1} </p>
        <p>
          Payment amount :-
          <span className="font-bold text-color_red">
            {member.lot * settings.perLotPrice}
          </span>
        </p>
      </div>

      <Buttion className="mt-3 w-[250px]" onClick={handleClick}>
        {isPending ? <MiniLoader /> : "Payment Recived"}
      </Buttion>
      <Today />
    </div>
  );
}

export default InstalmentCollection;
