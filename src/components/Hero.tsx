const Hero = () => {
  return (
    <div className="p-12 flex flex-col gap-12">
      <div className="md:max-w-[75%]">
        <div className="">Turning Pixel into Emotion</div>
        <div className="text-[5rem]/23 font-semibold">
          Good design made simple, perfected with clarity
        </div>
      </div>
      <div className="flex flex-col gap-4 ms-auto md:max-w-[30%] ">
        <div className="text-lg text-[#454140]">
          We craft branding, websites, products, and systems that bloom. where
          UI is the 🌸 and UX is its fragrance.
        </div>
        <div>
          <button className="rounded-full cursor-pointer p-2 px-6 font-semibold text-black bg-[#CAFF87]">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
