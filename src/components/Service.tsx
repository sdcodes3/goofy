import Accordian from "./Accordian";
import girl from "../images/Transhumans Ecto Plasma.png";

export default function Service() {
  return (
    <div className="w-full py-12">
      <div className="text-[#FFD86F] px-12 text-3xl font-semibold flex items-end gap-12 max-w-full w-[13%] min-w-[10rem]">
        Services
        <img src={girl} alt="Walking girl" />
      </div>
      <div className="bg-white px-12 mt-6">
        <Accordian />
      </div>
    </div>
  );
}
