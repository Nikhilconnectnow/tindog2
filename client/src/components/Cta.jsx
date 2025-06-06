import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function AppCTA() {
  return (
    <div id="download" className="flex flex-col items-center justify-center min-h-screen bg-[#ff4b6e] text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Find the True Love of Your Dog's Life
      </h1>
      <h2 className="text-4xl md:text-6xl font-extrabold mt-4">Today.</h2>

      <div className="mt-10 flex space-x-4">
        <a
          href="#"
          className="flex items-center bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-800"
        >
          <FaApple className="mr-2" size={24} />
          Download
        </a>

        <a
          href="#"
          className="flex items-center border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#ff4b6e]"
        >
          <FaGooglePlay className="mr-2" size={24} />
          Download
        </a>
      </div>
    </div>
  );
}
