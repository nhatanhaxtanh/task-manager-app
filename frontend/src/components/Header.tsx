import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/task-manager-app/">
            <div className="text-2xl font-extrabold">
            CHIP<span className="text-gray-800">TASK</span>
            </div>
        </Link>


        {/* Menu Items */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {[
            { label: "Trang chủ", href: "/task-manager-app/" },
            { label: "Tính năng", href: "/task-manager-app/features/" },
            { label: "Cách hoạt động", href: "/task-manager-app/howitworks" },
            { label: "Bảng giá", href: "#pricing" },
            { label: "Liên hệ", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative inline-block
                before:content-[''] before:absolute before:left-0 before:bottom-0
                before:h-[2px] before:w-0 before:bg-current
                before:transition-all before:duration-300
                hover:before:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-600">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500"
          >
            <Twitter className="w-5 h-5" />
          </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <Linkedin size={24} />
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
