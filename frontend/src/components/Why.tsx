// src/components/WhySection.tsx
import React from 'react';

const features = [
  {
    title: 'Dễ sử dụng',
    description: 'Giao diện trực quan, thao tác kéo thả giúp đội nhóm làm việc nhanh chóng mà không cần đào tạo.',
    icon: '🧠',
  },
  {
    title: 'Tùy biến linh hoạt',
    description: 'Dễ dàng tùy chỉnh theo quy trình riêng của từng doanh nghiệp hoặc nhóm làm việc.',
    icon: '🎛️',
  },
  {
    title: 'Báo cáo thông minh',
    description: 'Theo dõi tiến độ, hiệu suất cá nhân và nhóm theo thời gian thực.',
    icon: '📊',
  },
];

const WhySection: React.FC = () => {
  return (
    <section id="why" className="px-6 md:px-20 py-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Vì sao chọn chúng tôi?</h2>
        <p className="text-gray-600 mb-12">
          Nền tảng quản lý dự án được thiết kế để tối ưu trải nghiệm người dùng và hiệu quả làm việc.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
