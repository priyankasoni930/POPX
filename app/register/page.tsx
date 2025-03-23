"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phoneNumber: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "radio" ? (name === "isAgency" ? checked : !checked) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/account");
  };

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto">
      <div className="flex-1 flex flex-col justify-start pt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Create your
          <br />
          PopX account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-[#7F3DFF]"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-[#7F3DFF]"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#7F3DFF]"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#7F3DFF]"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-[#7F3DFF]"
            >
              Company name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-800">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#7F3DFF] accent-[#7F3DFF]"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isNotAgency"
                  checked={!formData.isAgency}
                  onChange={handleChange}
                  className="w-5 h-5 text-gray-400"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#7F3DFF] text-white text-center rounded-md font-medium mt-8"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
