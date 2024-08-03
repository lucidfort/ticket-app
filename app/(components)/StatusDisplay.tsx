type Props = {
  status: string;
};

const StatusDisplay = ({ status }: Props) => {
  const getColor = (status: string) => {
    switch (status) {
      case "done":
        return "bg-green-200";

      case "started":
        return "bg-yellow-200";

      case "not started":
        return "bg-red-200";

      default:
        return "bg-slate-700";
    }
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
