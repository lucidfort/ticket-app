import TicketCard from "./(components)/TicketCard";

interface Tickets {
  tickets: TicketData[];
}
const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets }: Tickets = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }: { category: string }) => category)),
  ] as string[];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>

              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter(
                    (ticket: TicketData) => ticket.category === uniqueCategory
                  )
                  .map((ticket, ticketIndex) => (
                    <TicketCard key={ticketIndex} ticket={ticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
