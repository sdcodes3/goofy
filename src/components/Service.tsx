import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
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
      {/* <div className="mx-auto w-full divide-y divide-white/5 rounded-xl">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              Do you offer technical support?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            No.
          </DisclosurePanel>
        </Disclosure>
      </div> */}
    </div>
  );
}
