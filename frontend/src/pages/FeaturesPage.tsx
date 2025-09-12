// src/pages/FeaturesPage.tsx
import React from "react";
import {
  LayoutDashboard,
  Users,
  AlarmClock,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Giao diện kéo thả trực quan",
    description:
      "Tạo và sắp xếp công việc chỉ bằng thao tác kéo thả đơn giản, thân thiện với người dùng.",
    icon: <LayoutDashboard className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Phân quyền & cộng tác",
    description:
      "Phân quyền vai trò, mời thành viên, bình luận & theo dõi công việc theo thời gian thực.",
    icon: <Users className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Tự động hóa nhắc việc",
    description:
      "Tự động nhắc việc qua email, Zalo hoặc push notification khi đến hạn.",
    icon: <AlarmClock className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Báo cáo thông minh",
    description:
      "Xem biểu đồ phân tích tiến độ, năng suất cá nhân và toàn bộ nhóm.",
    icon: <BarChart3 className="w-10 h-10 text-purple-600" />,
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-20 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tính năng nổi bật</h1>
        <p className="text-gray-600 mb-16">
          Công cụ toàn diện để giúp bạn và đội nhóm đạt hiệu quả cao nhất.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left flex flex-col items-start"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
