import { FaCheckCircle, FaBullseye, FaHeart } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section  className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row justify-between text-center">
  
      <div className="flex flex-col items-center max-w-xs">
        <FaCheckCircle className="text-4xl hover:text-[#ff4b6e] text-black mb-4" />
        <h3 className="font-bold text-lg mb-2">Easy to use.</h3>
        <p className="text-gray-500">So easy to use, even your dog could do it.</p>
      </div>

  
      <div className="flex flex-col items-center max-w-xs">
        <FaBullseye className="text-4xl hover:text-[#ff4b6e] text-black mb-4" />
        <h3 className="font-bold text-lg mb-2">Elite Clientele</h3>
        <p className="text-gray-500">We have all the dogs, the greatest dogs.</p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center max-w-xs">
        <FaHeart className="text-4xl hover:text-[#ff4b6e] text-black mb-4" />
        <h3 className="font-bold text-lg mb-2">Guaranteed to work.</h3>
        <p className="text-gray-500">Find the love of your dog's life or your money back.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
