import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 items-center">
        <div className="flex items-center gap-5">
          <div className="h-10 w-10">
            <img
              src="/logo.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Shubham
          </p>
        </div>
        <div className="flex gap-5 justify-end">
          <a
            href="https://www.linkedin.com/in/shubham0085a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-[#0e76a8] p-1 rounded-md border transition-all duration-700"
          >
            <FaLinkedinIn className="h-7 w-7" />
          </a>
          <a
            href="https://github.com/Shubham0085a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-black p-1 rounded-md border transition-all duration-700"
          >
            <FaGithub className="h-7 w-7" />
          </a>
          <a
            href="mailto:aasy0085@gmail.com"
            className="hover:text-white hover:bg-black p-1 rounded-md border transition-all duration-700"
          >
            <MdEmail className="h-7 w-7" />
          </a>
          <a
            href="https://www.instagram.com/mr_shubham.sy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-black p-1 rounded-md border transition-all duration-700"
          >
            <FaInstagram className="h-7 w-7" />
          </a>
          <a
            href="https://x.com/shubham0085a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-black p-1 rounded-md border transition-all duration-700"
          >
            <FaXTwitter className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
