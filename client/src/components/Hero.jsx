import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  const iphoneImage = "/iphone6.png";

  return (
    <section id="download" className="bg-[#ff4c68] text-white px-6 py-20 lg:h-[65vh] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
     
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            Meet new and <br />
            interesting dogs <br />
            nearby.
          </h1>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className=" flex items-center border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#ff4b6e]"
            >
              <FaApple className="text-xl" />
              Download
            </a>
            <a
              href="#"
              className="flex items-center border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#ff4b6e]"
            >
              <FaGooglePlay className="text-xl" />
              Download
            </a>
          </div>
        </div>
        <div className="mb-10 md:mb-0 md:w-1/2  flex justify-center ">
          <img
            src={iphoneImage}
            alt="App Preview"
            className=" w-[150px] md:w-[200px] lg:w-[250px] transform lg:rotate-[20deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
