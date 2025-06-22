// utils/getStatusColor.ts

const getStatusColor = (status: string): string => {
  switch (status) {
    case "active":
    case "success":
      return "bg-green-100 text-green-800";
    case "pending":
    case "warning":
      return "bg-yellow-100 text-yellow-800";
    case "suspended":
    case "error":
      return "bg-red-100 text-red-800";
    case "info":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default getStatusColor;
