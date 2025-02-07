import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-evenly items-center h-[60vh] mt-10 bg-slate-50 mx-10 px-10 mb-20">
      <div className="">
        <Image
          src="/about-img.jpg"
          alt=""
          width={400}
          height={400}
          className="h-auto w-auto"
        />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          <br /> dolorem eum consequuntur ipsam repellat dolor soluta aliquid
          <br /> laborum, eius odit consectetur vel quasi in quidem, eveniet ab
          est
          <br /> corporis tempore.
        </p>
        <button className="bg-[#65b9b5] text-white py-2 px-11 mt-7 font-semibold  hover:bg-white hover:text-[#65b9b5] border hover:border-[#65b9b5]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
