import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col justify-end pb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="space-y-4">
          <Link
            href="/register"
            className="block w-full py-3 bg-[#7F3DFF] text-white text-center rounded-md font-medium"
          >
            Create Account
          </Link>

          <Link
            href="/login"
            className="block w-full py-3 bg-[#E2CBFF] text-gray-700 text-center rounded-md font-medium"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  )
}

