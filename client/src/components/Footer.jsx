import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
  

   <div>
      <footer id="contact" className="mt-20 h-[30vh] text-center text-gray-300">
        <div className="flex justify-center space-x-6 text-xl mb-4">
          <a href="#" className="hover:text-[#ff4b6e] ">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#ff4b6e]">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#ff4b6e]">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#ff4b6e]">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm">© Copyright 2018 TinDog</p>
      </footer>
    </div>
  );
}
