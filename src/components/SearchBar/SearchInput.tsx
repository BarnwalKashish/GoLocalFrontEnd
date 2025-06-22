import * as React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onClick }) => {
  return (
    <div className="flex-1 flex items-center px-4">
      <Search className="h-6 w-6 text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="What service do you need?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={onClick}
        className="flex-1 bg-transparent border-none outline-none text-lg text-gray-700 placeholder-gray-500 font-medium"
      />
    </div>
  );
};

export default SearchInput;
