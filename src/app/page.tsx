import Image from "next/image";
import img from "../../public/assets/rem-bg.png";
export default function Home() {
  return (
    <div className="px-[5vw] font-mono pt-[5vw] md:pt-[2vw]">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-7/12">
          <div className="text-[3rem] sm:text-[3.5rem] lg:text-[5.3rem] lg:pl-[2vw]">
            Full-Stack
          </div>
          <div className="text-[3rem] sm:text-[3.5rem] lg:text-[5.3rem] -mt-5 lg:-mt-10 min-ml-[9vw] ml-[20vw] sm:ml-[30vw]">
            Developer
          </div>
          <div className="text-[1rem] sm:text-[1.12rem] lg:text-[1.25rem] pt-[12vw] md:pt-14 -mt-[10vw] md:-mt-[12vw] lg:-mt-[10vw] xl:lg:-mt-[9vw] md:w-[28vw] lg:pl-[2vw]">
            My goal is to write maintainable, clean code to build scalable and efficient applications.
          </div>
          <div className="flex justify-center md:absolute left-[40vw] xl:left-[37vw] md:top-[25vw] xl:top-[23vw] top-[30vw]"> 
            <button className="bg-[#00A7E1] text-white text-[1.1rem] sm:text-[1.2rem] lg:text-[1.3rem]  px-4 py-2 mt-5 rounded-md">
              Download Resume
            </button>
          </div>
        </div>
        <div className="hidden md:block w-5/12">
          <Image src={img} alt="abc" className="md:ml-[3rem] lg:ml-[5rem] xl:ml-[3rem] max-h-[450px] w-[400px] -mt-20" />
        </div>
      </div>
      <hr />
    </div>
  );
}
