import React from "react";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          CHIP<span className="text-gray-800">TASK</span>
        </div>

        {/* Menu Items */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        {[
            { label: 'Tính năng', href: '#features' },
            { label: 'Cách hoạt động', href: '#how-it-works' },
            { label: 'Bảng giá', href: '#pricing' },
            { label: 'Liên hệ', href: '#contact' },
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
