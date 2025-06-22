// utils/getRoleColor.ts

const getRoleColor = (role: string): string => {
  switch (role) {
    case "ROLE_CUSTOMER":
      return "bg-blue-100 text-blue-800";
    case "ROLE_PROVIDER":
      return "bg-purple-100 text-purple-800";
    case "ROLE_ADMIN":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default getRoleColor;
