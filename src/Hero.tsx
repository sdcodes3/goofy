const Hero = () => {
  return (
    <div className="p-12 flex flex-col gap-8">
      <div className="md:max-w-[70%]">
        <div className="">Turning Pixel into Emotion</div>
        <div className="text-[5rem]/23">
          Good design made simple perfected with clarity
        </div>
      </div>
      <div className="flex flex-col gap-4 ms-auto md:max-w-[30%]">
        <div>
          We craft branding, websites, products, and systems that bloom. where
          UI is the flower and UX is its fragrance.
        </div>
        <div>
          <button className="border rounded-full border-[#CACACA] cursor-pointer p-2 px-3">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
