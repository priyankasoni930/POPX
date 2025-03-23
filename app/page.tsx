import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] p-6 flex flex-col">
      <div className="flex-1 flex flex-col justify-end">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-400 ">Lorem ipsum dolor sit amet,</p>
        <p className="text-gray-400 mb-2">consectetur adipiscing elit.</p>
        <div className="space-y-4 pt-6">
          <Link
            href="/register"
            className="block w-full py-3 bg-[#7F3DFF] text-white text-center rounded-[8px] font-medium hover:bg-[#6B2FE6] transition-colors duration-200"
          >
            Create Account
          </Link>

          <Link
            href="/login"
            className="block w-full py-3 bg-[#E2CBFF] text-gray-700 text-center rounded-[8px] font-medium hover:bg-[#D4B8FF] transition-colors duration-200"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
