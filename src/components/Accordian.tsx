import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <h2 className="text-3xl font-normal text-black">{title}</h2>
        <ChevronDown
          className={`transform transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
          size={24}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="pb-6 pr-12 pt-2">
          <p
            className="text-gray-600 text-lg leading-relaxed transform transition-transform duration-500 ease-out"
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(-10px)",
              transitionDelay: isOpen ? "150ms" : "0ms",
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Accordian = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setOpenItem(openItem === title ? null : title);
  };

  const services = [
    {
      id: 1,
      title: "Services",
      content:
        "We offer a comprehensive range of digital services tailored to meet your business needs. Our team of experts works closely with you to deliver solutions that drive growth and innovation.",
    },
    {
      id: 2,
      title: "Branding",
      content:
        "Our branding services help you establish a strong, memorable identity in the market. We develop cohesive brand strategies, visual identities, and messaging that resonates with your target audience and sets you apart from competitors.",
    },
    {
      id: 3,
      title: "UX/UI Designs",
      content:
        "We create intuitive, user-centered designs that enhance user experience and drive engagement. Our UX/UI design process focuses on understanding user needs, creating seamless interactions, and delivering visually stunning interfaces.",
    },
    {
      id: 4,
      title: "Motion & Animation",
      content:
        "Bring your brand to life with our motion and animation services. We create dynamic visual content that captures attention, communicates complex ideas, and adds a layer of sophistication to your digital presence.",
    },
    {
      id: 5,
      title: "Mobile",
      content:
        "Our mobile development team builds responsive, high-performance applications that work flawlessly across all devices. We focus on creating mobile experiences that are both functional and delightful to use.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="">
        <div className="space-y-0">
          {services.map((service) => (
            <AccordionItem
              key={service.id}
              title={service.title}
              content={service.content}
              isOpen={openItem === service.title}
              onClick={() => toggleItem(service.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
