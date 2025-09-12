import React from "react";
import {
  ClipboardList,
  UserPlus,
  Workflow,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "1. Tạo dự án và công việc",
    description: "Bắt đầu bằng việc tạo dự án và thêm các công việc cần làm theo quy trình làm việc của nhóm bạn.",
    icon: <ClipboardList className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "2. Mời thành viên vào nhóm",
    description: "Chia sẻ liên kết hoặc mời đồng đội qua email để cùng cộng tác trong thời gian thực.",
    icon: <UserPlus className="w-10 h-10 text-green-600" />,
  },
  {
    title: "3. Kéo thả & theo dõi tiến độ",
    description: "Dễ dàng thay đổi trạng thái công việc bằng thao tác kéo thả, cập nhật tiến độ nhanh chóng.",
    icon: <Workflow className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "4. Đánh giá và hoàn thành",
    description: "Xem báo cáo tổng quan, kiểm tra tiến độ cá nhân & nhóm để hoàn thành đúng hạn.",
    icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-20 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Cách hoạt động</h2>
        <p className="text-gray-600 mb-16">
          Chỉ với vài bước đơn giản, bạn có thể bắt đầu tối ưu quy trình làm việc ngay lập tức.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition text-left flex flex-col items-start"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
