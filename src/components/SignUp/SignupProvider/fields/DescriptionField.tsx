import React from "react";
import { FileText } from "lucide-react";

interface DescriptionFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const DescriptionField: React.FC<DescriptionFieldProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
        Service Description
      </label>
      <div className="relative">
        <div className="absolute top-3 left-3">
          <FileText className="h-5 w-5 text-gray-400" />
        </div>
        <textarea
          id="description"
          name="description"
          value={value}
          onChange={onChange}
          rows={3}
          required
          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-white/80"
          placeholder="Brief description of your skills and experience"
        />
      </div>
    </div>
  );
};

export default DescriptionField;
