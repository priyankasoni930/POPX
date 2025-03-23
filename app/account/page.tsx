import Image from "next/image"
import { Camera } from "lucide-react"

export default function Account() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Account Settings</h1>
      </div>

      <div className="p-6 flex items-center border-b border-dashed border-gray-200">
        <div className="relative mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/images/profile-pic.png"
              alt="Profile picture"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#7F3DFF] rounded-full p-1">
            <Camera size={16} className="text-white" />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-gray-800">Marry Doe</h2>
          <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}

