import React from "react";
import { Upload } from "lucide-react";

interface PhotoUploadProps {
  id: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ id, name, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        Profile Photo (Optional)
      </label>
      <div className="relative">
        <input
          type="file"
          id={id}
          name={name}
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />
        <label
          htmlFor={id}
          className="w-full flex items-center justify-center px-3 py-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors bg-white/80"
        >
          <Upload className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-gray-600">Upload Photo</span>
        </label>
      </div>
    </div>
  );
};

export default PhotoUpload;
