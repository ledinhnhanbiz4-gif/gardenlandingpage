# 🌿 GreenSpace — Landing Page

Landing page thương hiệu cây cảnh: **Terrarium · Thủy sinh · Cây xanh để bàn · Sen đá - Xương rồng · Phụ kiện · Workshop**.

Phong cách: Hiện đại – Thiên nhiên – Chuyên nghiệp, màu xanh lá chủ đạo.

## ✨ Tính năng

- ✅ **Responsive Mobile-First** (Desktop / Tablet / Mobile)
- 🌗 **Dark / Light Mode** — lưu localStorage + tự nhận theme hệ điều hành
- 🖼️ **Hero Slider** — auto slide, prev/next, dots, swipe cảm ứng, pause khi hover
- 🧩 **Sticky Header** đổi nền khi cuộn + active nav theo section
- 📦 **Grid sản phẩm** render động từ JS
- 👥 **Section đội ngũ** với hover card + mạng xã hội
- 🙋 **Section Về tôi** + **Counter Animation**
- 🗺️ **Google Map Embed** + thông tin liên hệ
- 🎬 Hiệu ứng: Fade-in on scroll, Image zoom hover, Smooth scroll
- 🔍 **SEO**: Meta tags, Open Graph, Schema LocalBusiness, sitemap.xml, robots.txt
- ⚡ Lazy loading ảnh, hỗ trợ `prefers-reduced-motion`

## 🛠️ Công nghệ

- HTML5 semantic
- Tailwind CSS (CDN) + CSS3 tùy chỉnh (`style.css`)
- JavaScript ES6+ thuần (`app.js`), không phụ thuộc framework

## 📁 Cấu trúc

```
LandingPage/
├── index.html          # Cấu trúc trang
├── style.css           # Style tùy chỉnh + animation
├── app.js              # Logic: theme, slider, render, counter, reveal
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── README.md
└── assets/
    └── images/         # Ảnh cục bộ (xem README bên trong)
```

## 🚀 Chạy thử

Chỉ cần mở `index.html` bằng trình duyệt. Hoặc chạy server tĩnh để mượt hơn:

```bash
# Python
python -m http.server 5500

# Node (npx)
npx serve .
```

Rồi truy cập `http://localhost:5500`.

## 🎨 Bảng màu

| Token        | Mã màu    |
|--------------|-----------|
| Primary      | `#2E7D32` |
| Secondary    | `#4CAF50` |
| Accent       | `#8BC34A` |
| Light BG     | `#F5FFF5` |
| Dark BG      | `#0F172A` |
| Text Dark    | `#1E293B` |

## 📌 Lưu ý triển khai production

1. **Tailwind CDN** tiện cho demo nhưng nên build Tailwind qua CLI/PostCSS để giảm dung lượng và đạt Lighthouse cao hơn.
2. Thay ảnh Unsplash bằng ảnh thật, dạng **WebP** (xem `assets/images/README.md`).
3. Cập nhật link mạng xã hội, số điện thoại, email, tọa độ Google Map và `link rel=canonical` theo domain thật.
4. Minify `style.css` / `app.js` khi lên production.
