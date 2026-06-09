# assets/images

Thư mục chứa hình ảnh cục bộ của website.

Hiện tại landing page đang dùng ảnh từ Unsplash (CDN) để demo nhanh. Khi triển khai thực tế, bạn nên:

1. Tải ảnh hoạt động thực tế của thương hiệu về đây.
2. Chuyển sang định dạng **WebP** để tối ưu tốc độ (ví dụ dùng https://squoosh.app).
3. Thay thế các đường dẫn `https://images.unsplash.com/...` trong `index.html` và `app.js`
   bằng đường dẫn cục bộ, ví dụ: `assets/images/terrarium-01.webp`.

## Gợi ý danh sách ảnh cần chuẩn bị

| Tên file gợi ý            | Dùng cho                     | Kích thước đề xuất |
|---------------------------|------------------------------|--------------------|
| hero-terrarium.webp       | Slider hero                  | 1920×1080          |
| hero-aquarium.webp        | Slider hero                  | 1920×1080          |
| hero-workshop.webp        | Slider hero                  | 1920×1080          |
| hero-store.webp           | Slider hero                  | 1920×1080          |
| product-terrarium.webp    | Card sản phẩm                | 800×600            |
| product-aquarium.webp     | Card sản phẩm                | 800×600            |
| product-plant.webp        | Card sản phẩm                | 800×600            |
| product-succulent.webp    | Card sản phẩm                | 800×600            |
| product-accessory.webp    | Card sản phẩm                | 800×600            |
| product-workshop.webp     | Card sản phẩm                | 800×600            |
| about-founder.webp        | Section "Về tôi"             | 800×1000           |
| team-1..4.webp            | Avatar đội ngũ               | 400×400            |
