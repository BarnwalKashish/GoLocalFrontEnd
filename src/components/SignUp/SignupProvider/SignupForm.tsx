import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Upload, User, Phone, MapPin, Briefcase, FileText } from "lucide-react";

const occupations = [
  'Electrician', 'Plumber', 'Carpenter', 'Painter', 'Cleaner', 'Gardener', 'Mechanic',
  'Technician', 'Music Tutor', 'Academic Tutor', 'Fitness Trainer', 'Chef/Cook',
  'Photographer', 'Other',
];

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    occupation: '',
    location: '',
    username: '',
    description: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const response = await fetch('/api/auth/register-provider', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.mobile,
          location: formData.location,
          role: 'ROLE_PROVIDER',
          serviceCategory: formData.occupation,
          description: formData.description,
          password: formData.password
        })
      });

      if (response.ok) {
        alert("Registration successful! Welcome to Go Local.");
        navigate("/provider-dashboard");
      } else {
        const error = await response.json();
        alert(`Registration failed: ${error.message || "Please try again."}`);
      }
    } catch (err) {
      console.error(err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name & Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField icon={<User />} name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
        <InputField icon={<Phone />} name="mobile" value={formData.mobile} onChange={handleChange} placeholder="10-digit mobile number" type="tel" />
      </div>

      {/* Occupation & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label text="Service Category" />
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Briefcase className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
            >
              <option value="">Select your service</option>
              {occupations.map(occ => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
          </div>
        </div>
        <InputField icon={<MapPin />} name="location" value={formData.location} onChange={handleChange} placeholder="Your city/area" />
      </div>

      {/* Username & Photo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField name="username" value={formData.username} onChange={handleChange} placeholder="Choose a unique username" />
        <FileUpload />
      </div>

      {/* Description */}
      <div>
        <Label text="Service Description" />
        <div className="relative">
          <div className="absolute top-3 left-3">
            <FileText className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-white/80 focus:ring-2 focus:ring-blue-500"
            placeholder="Brief description of your skills and experience"
          />
        </div>
      </div>

      {/* Password Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PasswordField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          visible={showPassword}
          setVisible={setShowPassword}
        />
        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          visible={showConfirmPassword}
          setVisible={setShowConfirmPassword}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg transition-all"
      >
        Register as Service Provider
      </button>
    </form>
  );
};

export default SignupForm;

// Utility Components
const InputField = ({
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = "text"
}: {
  icon?: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}) => (
  <div>
    <Label text={name.replace(/^\w/, c => c.toUpperCase())} />
    <div className="relative">
      {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center">{icon}</div>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-white/80 focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  </div>
);

const PasswordField = ({
  label,
  name,
  value,
  onChange,
  visible,
  setVisible
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div>
    <Label text={label} />
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-xl bg-white/80 focus:ring-2 focus:ring-blue-500"
        placeholder={label}
      />
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
      >
        {visible ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
      </button>
    </div>
  </div>
);

const FileUpload = () => (
  <div>
    <Label text="Profile Photo (Optional)" />
    <div className="relative">
      <input type="file" id="photo" name="photo" accept="image/*" className="hidden" />
      <label
        htmlFor="photo"
        className="w-full flex items-center justify-center px-3 py-3 border border-gray-300 rounded-xl cursor-pointer bg-white/80"
      >
        <Upload className="h-5 w-5 text-gray-400 mr-2" />
        <span className="text-gray-600">Upload Photo</span>
      </label>
    </div>
  </div>
);

const Label = ({ text }: { text: string }) => (
  <label htmlFor={text.toLowerCase().replace(/\s/g, "")} className="block text-sm font-medium text-gray-700 mb-2">
    {text}
  </label>
);
