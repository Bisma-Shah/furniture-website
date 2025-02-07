import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-slate-50 h-[80vh] mx-10 flex justify-evenly">
      {/* Left-Side */}
      <div className="mx-16 mt-28 leading-snug">
        <h1 className="text-4xl font-extrabold text-black leading-snug">
          FOR ALL YOUR <br /> FURNITURE NEEDS
        </h1>
        <p className="mt-6 text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem
          maiores perspiciatis, illo maxime voluptatem a itaque suscipit
        </p>
        <div className="mt-6 flex gap-3">
          <button className=" bg-orange-400 font-semibold py-3 px-10 text-white hover:bg-white hover:text-orange-400 border hover:border-orange-400">
            <Link href="/contact">Contact Us</Link>
          </button>
          <button className="bg-[#65b9b5] text-white font-semibold py-3 px-10 hover:bg-white hover:text-[#65b9b5] border hover:border-[#65b9b5]">
            <Link href="/about">About Us</Link>
          </button>
        </div>
      </div>
      {/* Right-Side */}
      <div className="mr-16 mt-20 h-[200vh] w-[200vh]">
        <img src="/slider-img.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
