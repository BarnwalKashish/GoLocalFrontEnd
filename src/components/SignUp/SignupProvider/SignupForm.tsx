import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { User, Phone, MapPin, Briefcase, Mail, Award } from "lucide-react";

import SignupInput from "./fields/SignupInput";
import PasswordField from "./fields/PasswordField";
import SelectOccupation from "./fields/SelectOccupation";
import PhotoUpload from "./fields/PhotoUpload";
import DescriptionField from "./fields/DescriptionField";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    occupation: "",
    location: "",
    username: "",
    description: "",
    password: "",
    confirmPassword: "",
    email: "",
    experience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
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
      const form = new FormData();
      form.append("username", formData.username);
      form.append("providerName", formData.name);
      form.append("location", formData.location);
      form.append("mobileNumber", formData.mobile);
      form.append("email", formData.email);
      form.append("service", formData.occupation);
      form.append("experience", formData.experience);
      form.append("description", formData.description);
      if (photo) form.append("profilePicture", photo);
      form.append("password", formData.password);

      const res = await axios.post("/api/auth/register-provider", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200 || res.status === 201) {
        alert("Registration successful! Welcome to Go Local.");
        navigate("/provider-dashboard");
      } else {
        alert(`Registration failed: ${res.statusText}`);
      }
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ message?: string }>;
      const errorMsg =
        axiosError.response?.data?.message || "Registration failed";
      console.error("Registration error:", errorMsg);
      alert(`Error: ${errorMsg}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name & Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SignupInput
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          icon={User}
        />
        <SignupInput
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          icon={Phone}
        />
      </div>

      {/* Email & Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SignupInput
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          icon={Mail}
        />
        <SignupInput
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Years of experience"
          icon={Award}
        />
      </div>

      {/* Occupation & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectOccupation
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  icon={Briefcase} occupations={[]}        />
        <SignupInput
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City or Area"
          icon={MapPin}
        />
      </div>

      {/* Username & Photo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SignupInput
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Unique Username"
        />
        <PhotoUpload
          id="profilePicture"
          name="profilePicture"
          onChange={handlePhotoUpload}
        />
      </div>

      {/* Description */}
      <DescriptionField
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      {/* Password Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PasswordField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          showPassword={showPassword}
          toggleVisibility={() => setShowPassword((prev) => !prev)}
        />

        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          showPassword={showConfirmPassword}
          toggleVisibility={() => setShowConfirmPassword((prev) => !prev)}
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
