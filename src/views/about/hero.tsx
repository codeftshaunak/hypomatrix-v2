import Image from "next/image";
import img from "@/assets/about1.jpg";

const Hero = () => {
  return (
    <section className="bg-black text-white mb-20">
      <div className="flex justify-between gap-12 items-center">
        <div className="w-[600px]">
          <span className="border-lime-500 border text-white px-3 py-1 rounded-full text-sm font-semibold">
            About us
          </span>
          <h2 className="text-5xl font-bold mt-4">
            Strategic growth powered by HypoMatrix!
          </h2>
          <p className="text-gray-400 mt-4">
            At Agenko Agency, we specialize in delivering strategic growth
            solutions tailored to elevate your business to new heights. By
            combining innovative strategies, data-driven insights, and creative
            expertise, we help companies unlock their full potential.
          </p>
          <p className="text-gray-400 mt-4">
            Our dedicated team works closely with clients to understand their
            unique goals, crafting customized plans that drive measurable
            results.
          </p>
          <button className="mt-6 bg-lime-500 text-black font-semibold px-7 py-3 rounded-full cursor-pointer">
            Learn More
          </button>
          <div className="flex gap-12 mt-8">
            <div>
              <h3 className="text-6xl font-bold text-lime-500">240+</h3>
              <p className="text-gray-400">projects success rate 99%</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold text-lime-500">23+</h3>
              <p className="text-gray-400">Award for digital innovation</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image className="rounded-lg" src={img} alt="image not found" />
          <div className="absolute top-[200px] -left-[80px] bg-lime-500 text-black px-4 py-6 rounded-lg">
            <h3 className="text-4xl font-semibold text-center">240+</h3>
            <p className="text-sm text-center">Years on the market</p>
          </div>
          <div className="absolute bottom-0 right-0 flex items-center gap-2 bg-black px-6 py-4 rounded-ee-full rounded-b-lg text-white border border-gray-700">
            <span className="bg-white text-black px-4 py-2 rounded-full">
              ▶
            </span>
            <div className="flex flex-col">
              <p>Let&apos;s see</p>
              <p>how we did it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
