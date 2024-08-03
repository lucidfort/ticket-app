export const initState: TicketData = {
  title: "",
  description: "",
  priority: 1,
  progress: 0,
  status: "not started",
  category: "Hardware Problem",
};

export const updateState = {
  _id: "",
  title: "",
  description: "",
  priority: 1,
  progress: 0,
  status: "",
  category: "",
  createdAt: "",
  updatedAt: "",
  __v: "",
};

export const editState: EditTicketData = {
  foundTicket: updateState,
};
