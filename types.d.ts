type TicketData = {
  _id?: string;
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: string;
  category: string;
  createdAt?: string;
};

type EditTicketData = {
  foundTicket: {
    _id: string;
    title: string;
    description: string;
    priority: number;
    progress: number;
    status: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
  };
};
