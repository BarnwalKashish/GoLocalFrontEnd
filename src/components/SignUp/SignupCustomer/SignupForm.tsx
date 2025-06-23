import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { User, Phone, MapPin, Mail } from "lucide-react";

import SignupInput from "./fields/SignupInput";
import PasswordField from "./fields/PasswordField";
import PhotoUpload from "./fields/PhotoUpload";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      form.append("customerName", formData.name);
      form.append("location", formData.location);
      form.append("mobileNumber", formData.mobile);
      form.append("email", formData.email);
      if (photo) form.append("profilePicture", photo);
      form.append("password", formData.password);

      const res = await axios.post("/api/auth/register-customer", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200 || res.status === 201) {
        alert("Registration successful! Welcome to Go Local.");
        navigate("/customer-dashboard");
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
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          icon={<User />}
        />
        <SignupInput
          id="mobile"
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          icon={<Phone />}
        />
      </div>

      {/* Email & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SignupInput
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          icon={<Mail />}
        />
        <SignupInput
          id="location"
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City or Area"
          icon={<MapPin />}
        />
      </div>

      {/* Username & Photo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SignupInput
          id="username"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Unique Username"
        />
        <PhotoUpload id="photo" name="photo" onChange={handlePhotoUpload} />
      </div>

      {/* Password Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PasswordField
          id="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          show={showPassword}
          setShow={setShowPassword}
        />
        <PasswordField
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          show={showConfirmPassword}
          setShow={setShowConfirmPassword}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg transition-all"
      >
        Register as Customer
      </button>
    </form>
  );
};

export default SignupForm;
