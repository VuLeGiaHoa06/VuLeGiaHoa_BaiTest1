import React from 'react';
import { Store, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <span>ApexStore</span>
            </div>
            <p className="text-sm text-gray-400">
              Nền tảng mua sắm phụ kiện công nghệ hiện đại, chất lượng vượt trội cùng trải nghiệm mua sắm tiện lợi nhất.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Danh mục</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tai nghe & Âm thanh</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Đồng hồ thông minh</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bàn phím cơ & Chuột</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Phụ kiện Lifestyle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Hỗ trợ khách hàng</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Giao hàng & Đổi trả</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bảo mật thông tin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>123 Đường Công Nghệ, Q.1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+84 987 654 321</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>support@apexstore.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ApexStore. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Thiết kế với <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> theo chuẩn mô hình MVC React
          </p>
        </div>
      </div>
    </footer>
  );
};
