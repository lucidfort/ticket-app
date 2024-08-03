import { updateState } from "@/app/(components)/initState";
import { TicketForm } from "@/app/(components)/TicketForm";

const getTicketById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket");
  }

  return res.json();
};

const TicketPage = async ({ params }: { params: { id: string } }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketState: EditTicketData = { foundTicket: updateState };

  if (EDITMODE) {
    const data = await getTicketById(params.id);
    updateTicketState = data;
  } else {
    updateTicketState.foundTicket._id = "new";
  }

  return <TicketForm ticket={updateTicketState} />;
};

export default TicketPage;
