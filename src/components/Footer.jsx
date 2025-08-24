import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = ({
  title = "ASME NIT Rourkela Student Section",
  description = "The American Society of Mechanical Engineers Student Chapter at NIT Rourkela, fostering a culture of innovation and technical learning through innovation, collaboration, and hands-on learning.",
  social = {
    instagram: "https://www.instagram.com/asme.nitrkl/",
    linkedin: "https://www.linkedin.com/company/asme-nit-rourkela",
  },
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-[#0B2044] text-white px-4 pt-8 pb-8 sm:px-8 sm:pt-10 sm:pb-10 md:px-12 md:pt-12 md:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Logo and Description Section */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-4 mb-6">
              <img
                src="https://res.cloudinary.com/dswk9scro/image/upload/v1755092506/ASME_NIT_Rourkela_Student_Section_White_T_oe5ox2.png"
                alt="ASME Logo"
                className="w-20 h-16 object-contain flex-shrink-0"
              />
              <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                {title}
              </h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              {description}
            </p>
            <div className="flex gap-4">
              <a
                href={social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-[#51B8F2] transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href={social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-[#51B8F2] transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-[#51B8F2]  duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform transition-transform"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-[#51B8F2]  duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform transition-transform"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/achievements"
                  className="text-gray-300 hover:text-[#51B8F2]  duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform transition-transform"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-[#51B8F2] duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform transition-transform"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-[#51B8F2]/20 rounded-lg group-hover:bg-[#51B8F2]  duration-200">
                  <FiMail className="text-[#51B8F2] text-xl group-hover:text-white  duration-200" />
                </div>
                <a
                  href="mailto:asme.nitrkl@gmail.com"
                  className="text-gray-300 hover:text-[#51B8F2]  duration-200 text-sm sm:text-base"
                >
                  asme.nitrkl@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-[#51B8F2]/20 rounded-lg group-hover:bg-[#51B8F2]  duration-200 mt-1">
                  <GoLocation className="text-[#51B8F2] text-xl group-hover:text-white  duration-200" />
                </div>
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  National Institute of Technology Rourkela,
                  <br />
                  Odisha - 769008
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base">
            <p className="text-gray-300 text-center sm:text-left">
              © {year} {title}. All rights reserved.
            </p>
            <a
              href="https://opencodenitr.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#51B8F2]  duration-200 text-center sm:text-right"
            >
              Architected with ♥ by Team OpenCode
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
