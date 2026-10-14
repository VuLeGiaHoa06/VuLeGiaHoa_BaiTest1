# Dự án Đánh giá Năng lực - Frontend Web (Vũ Lê Gia Hòa)

Dự án giao diện ứng dụng web thương mại điện tử / giới thiệu sản phẩm được xây dựng bằng **React 19**, **TypeScript**, **Vite** và **Tailwind CSS**, áp dụng kiến trúc chuẩn hóa **MVC (Model - View - Controller)**.

---

## 1. Hướng dẫn cài đặt và chạy project

### Yêu cầu môi trường
- **Node.js**: Phiên bản 18 trở lên (khuyến nghị v20+)
- **npm** (hoặc `yarn` / `pnpm`)

### Các bước thực hiện

1. **Cài đặt thư viện phụ thuộc (Dependencies)**:
   ```bash
   npm install
   ```

2. **Chạy môi trường phát triển (Development mode)**:
   ```bash
   npm run dev
   ```
   Sau khi chạy lệnh, truy cập vào đường dẫn hiển thị trên terminal (mặc định là `http://localhost:5173/`).

3. **Xây dựng bản chạy Production (Build)**:
   ```bash
   npm run build
   ```

4. **Xem trước bản Build (Preview)**:
   ```bash
   npm run preview
   ```

---

## 2. Cấu trúc thư mục & Cách áp dụng mô hình MVC

Mã nguồn được tổ chức trong thư mục `src/` tuân thủ chặt chẽ mô hình **MVC** nhằm tách bạch rõ ràng giữa dữ liệu, logic xử lý và giao diện người dùng:

```text
VuLeGiaHoa_BaiTest/
├── public/                 # Tài nguyên tĩnh
├── src/
│   ├── assets/             # Hình ảnh, icons tĩnh
│   ├── models/             # [MODEL] Quản lý dữ liệu và logic nghiệp vụ dữ liệu
│   │   ├── product.model.ts    # Interface / Type định nghĩa cấu trúc Product
│   │   ├── products.data.ts    # Mock data danh sách sản phẩm
│   │   ├── cart.model.ts       # Model giỏ hàng, thao tác lưu trữ LocalStorage
│   │   ├── search.model.ts     # Interface & helper lọc/tìm kiếm sản phẩm
│   │   └── index.ts            # Export tập trung các models
│   ├── controllers/        # [CONTROLLER] Điều phối luồng và quản lý trạng thái
│   │   └── useAppController.tsx # AppContext & Custom Hook điều phối logic giỏ hàng, tìm kiếm, toast
│   ├── views/              # [VIEW] Giao diện người dùng
│   │   ├── components/         # Các thành phần UI tái sử dụng (Header, Footer, ProductCard, Sections...)
│   │   ├── layouts/            # Layout chung (MainLayout bọc Header, Footer, Toast)
│   │   └── pages/              # Các trang giao diện chính (HomePage, DetailPage, ComingSoonPage)
│   ├── App.tsx             # Cấu hình routing ứng dụng (React Router)
│   ├── main.tsx            # Điểm khởi chạy React DOM và gắn AppProvider
│   └── index.css           # Cấu hình Tailwind CSS / styling toàn cục
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

### Cách áp dụng mô hình MVC:
- **Model (`src/models/`)**:
  - Chịu trách nhiệm định nghĩa kiểu dữ liệu (TypeScript Interfaces như `Product`, `CartItem`, `SearchFilterState`), dữ liệu khởi tạo (`products.data.ts`) và các hàm thao tác dữ liệu nguyên bản như đọc/ghi giỏ hàng vào `localStorage` (`cart.model.ts`).
  - Đảm bảo độc lập, không phụ thuộc vào giao diện hiển thị.
- **View (`src/views/`)**:
  - Chỉ tập trung hiển thị giao diện (UI) và lắng nghe tương tác của người dùng.
  - Phân cấp rõ ràng thành: `pages` (trang hoàn chỉnh), `layouts` (khung giao diện mẫu), `components` (các khối thành phần giao diện nhỏ như Hero, Popular Products, Awards, News, ProductCard, Header, Footer).
  - Không trực tiếp thay đổi dữ liệu hay chứa logic nghiệp vụ phức tạp mà ủy thác cho Controller thông qua hooks/props.
- **Controller (`src/controllers/`)**:
  - Được hiện thực hóa qua `useAppController.tsx` kết hợp `React Context API` và Custom Hook.
  - Đóng vai trò cầu nối điều phối: nhận tương tác từ View (thêm vào giỏ, lọc sản phẩm, tìm kiếm), tương tác với Model để cập nhật dữ liệu (`cart.model`), cập nhật trạng thái (`cartCount`, `searchQuery`, `toastMessage`) và đồng bộ lại cho View hiển thị.

---

## 3. Danh sách công nghệ và thư viện đã sử dụng

| Công nghệ / Thư viện | Phiên bản | Mục đích sử dụng |
| :--- | :--- | :--- |
| **React** | `^19.3.0` | Thư viện UI cốt lõi để xây dựng Single Page Application theo component-based |
| **TypeScript** | `~6.0.2` | Ngôn ngữ tĩnh định kiểu mạnh, tăng độ tin cậy và an toàn cho mã nguồn |
| **Vite** | `^8.3.0` | Build tool và dev server tốc độ cao, hỗ trợ Hot Module Replacement (HMR) |
| **Tailwind CSS** | `^4.3.3` | Utility-first CSS framework giúp xây dựng giao diện responsive hiện đại và nhanh chóng |
| **React Router DOM** | `^7.18.4` | Quản lý điều hướng và định tuyến giữa các trang (`HomePage`, `DetailPage`, `ComingSoonPage`) |
| **Lucide React** | `^1.55.0` | Bộ icon SVG hiện đại, trực quan cho các nút hành động, giỏ hàng, tìm kiếm |
