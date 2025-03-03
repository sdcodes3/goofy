const Testimonial = () => {
  return (
    <div className="p-12">
      <div className="text-[#FFD86F] text-3xl font-semibold">Testimonial</div>
      <div className="text-8xl pt-4">What people say</div>
      <div className="flex flex-col gap-6 pt-18">
        <div className="flex gap-6">
          <div className="w-full lg:w-[60%] h-[20rem] bg-[#D9D9D9]"></div>
          <div className="w-full lg:w-[40%] bg-[#D9D9D9]"></div>
        </div>
        <div className="flex gap-6">
          <div className="w-full h-[20rem] bg-[#D9D9D9]"></div>
          <div className="w-full h-[20rem] bg-[#D9D9D9]"></div>
          <div className="w-full h-[20rem] bg-[#D9D9D9]"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
