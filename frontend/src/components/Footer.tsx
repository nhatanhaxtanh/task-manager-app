// src/components/Footer.tsx
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-20 py-10 px-6 md:px-20 rounded-t-2xl shadow-inner">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo + Mô tả */}
        <div>
          <h2 className="text-2xl font-bold mb-3">CHIPTASK</h2>
          <p className="text-sm text-gray-400">
            Nền tảng giúp đội nhóm quản lý công việc dễ dàng hơn, tăng hiệu suất, giảm căng thẳng.
          </p>
        </div>

        {/* Liên kết nhanh */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Liên kết</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-gray-300 transition">Tính năng</a></li>
            <li><a href="#how-it-works" className="hover:text-gray-300 transition">Cách hoạt động</a></li>
            <li><a href="#pricing" className="hover:text-gray-300 transition">Bảng giá</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition">Liên hệ</a></li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Theo dõi chúng tôi</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <Twitter size={24} />
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
      </div>

      {/* Bản quyền */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} CHIPTASK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
