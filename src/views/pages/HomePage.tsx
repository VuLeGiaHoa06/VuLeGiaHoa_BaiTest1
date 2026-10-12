import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { useAppController } from '../../controllers/useAppController';
import { HeroSection } from '../components/hero';
import { MostPopularSection, SkincareFeatureBanner } from '../components/popular';
import { Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { products, addToCart } = useAppController();

  return (
    <div className="space-y-6 pb-16">
      <HeroSection />

      <MostPopularSection onAddToCart={addToCart} />

      <SkincareFeatureBanner />

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-6 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Bộ sưu tập công nghệ đỉnh cao 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Nâng Tầm Trải Nghiệm <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300">
              Công Nghệ & Phong Cách Sống
            </span>
          </h1>
          <p className="text-sm sm:text-base text-indigo-100/80 max-w-2xl mx-auto leading-relaxed">
            Khám phá những thiết bị và phụ kiện cao cấp được tuyển chọn kỹ lưỡng, mang lại hiệu suất tối ưu và trải nghiệm sử dụng hoàn hảo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#products-section"
              className="px-6 py-3 rounded-full bg-white text-indigo-900 font-bold text-sm hover:bg-gray-100 transition-all shadow-lg shadow-black/20"
            >
              Khám phá ngay
            </a>
            <button className="px-6 py-3 rounded-full bg-indigo-700/60 hover:bg-indigo-700/90 text-white font-medium text-sm border border-indigo-500/50 transition-all">
              Xem khuyến mãi
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Miễn phí giao hàng</h4>
              <p className="text-xs text-gray-500">Đơn hàng từ $50 trên toàn quốc</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Bảo hành chính hãng</h4>
              <p className="text-xs text-gray-500">100% sản phẩm có chứng nhận</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Đổi trả 30 ngày</h4>
              <p className="text-xs text-gray-500">Thủ tục nhanh gọn và tiện lợi</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Danh mục tuyển chọn</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Sản phẩm nổi bật
            </h2>
          </div>
          <p className="text-sm text-gray-500">
            Hiển thị {products.length} sản phẩm tốt nhất
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
