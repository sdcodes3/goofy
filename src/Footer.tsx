import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";

const Footer = () => {
  return (
    <div className="flex flex-col p-12 bg-white rounded-t-2xl">
      <div className="flex flex-col sm:flex-row justify-between py-12 border-b gap-8">
        <div className="text-xl">goofydesign</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <div className="flex flex-col gap-3">
            <div className="text-gray-600 text-lg">Contact</div>
            <div>
              <a href="https://wa.me/9328168550" target="_blank">
                WhatsApp
              </a>
            </div>
            <div>
              <a href="mailto:hellogoofydesign@gmail.com">Email</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray-600 text-lg">Socials</div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/goofydesign">
                <div className="bg-[#E0DDDD] p-3 rounded-full flex items-center">
                  <img src={linkedin} />
                </div>
              </a>
              <a href="https://www.instagram.com/goofydesign_/">
                <div className="bg-[#E0DDDD] p-3 rounded-full flex items-center">
                  <img src={instagram} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-between py-12">
        <div>
          <div className="text-lg">Send an email! 👋</div>
          <div className="sm:text-[2rem] lg:text-[4rem]/23 pt-3">
            <a href="mailto:hellogoofydesign@gmail.com">
              hellogoofydesign@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-auto">
          <button
            className="bg-[#D9D9D9] p-4 rounded-full cursor-pointer absolute"
            style={{ bottom: "8.5rem", right: "5rem" }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-move-up"
            >
              <path d="M8 6L12 2L16 6" />
              <path d="M12 2V22" />
            </svg>
          </button>
          <div className="text-xs text-gray-600">&copy; goofydesign 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
