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
    // In a real app, you would validate and submit the form data here
    router.push("/account");
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] p-6 flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">
          Create your
          <br />
          PopX account
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <div>
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
              className="w-full p-3 border border-gray-300 rounded-[8px]  bg-white"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
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
              className="w-full p-3 border border-gray-300 rounded-[8px]  bg-white"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div>
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
              className="w-full p-3 border border-gray-300 rounded-[8px]  bg-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
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
              className="w-full p-3 border border-gray-300 rounded-[8px]  bg-white"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
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
              className="w-full p-3 border border-gray-300 rounded-[8px]  bg-white"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <p className="text-sm font-medium text-gray-800">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-6 mt-2">
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
        </div>

        <div className="mt-auto pt-6">
          <button
            type="submit"
            className="w-full py-3 bg-[#7F3DFF] text-white text-center rounded-[8px] font-medium hover:bg-[#6B2FE6] transition-colors duration-200"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
