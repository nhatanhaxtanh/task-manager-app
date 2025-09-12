import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-32 bg-white text-gray-800 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Quản lý công việc hiệu quả Tăng năng suất đội nhóm
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Nền tảng quản lý dự án đơn giản, mạnh mẽ và phù hợp cho mọi doanh nghiệp hiện đại.
          </p>

          <div className="flex space-x-4">
            <button
              onClick={() => window.location.href = '#get-started'}
              className="px-6 py-3 bg-black text-white border border-transparent rounded-lg font-extrabold cursor-pointer transition hover:bg-white hover:text-black hover:border-black"

            >
              Bắt Đầu Ngay
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img
            src="src/assets/ok.jpg"
            alt="Minh họa ứng dụng"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
