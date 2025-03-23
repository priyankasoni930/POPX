"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/account");
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col justify-start pt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#7F3DFF]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter email address"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#7F3DFF]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 ${
              email && password ? "bg-[#7F3DFF]" : "bg-[#CCCCCC]"
            } text-white text-center rounded-md font-medium`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
