import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

// 🧩 Component ChromaGrid — lưới hiển thị các thẻ (card) có hiệu ứng di chuột
// Nhận các props từ component cha (ví dụ App.jsx)
export const ChromaGrid = ({
  items,         // Danh sách dữ liệu (mảng các đối tượng có hình, tiêu đề, mô tả,...)
  onItemClick,   // Hàm được gọi khi người dùng click vào 1 thẻ (card)
  className = "",// Class bổ sung tùy chỉnh
  radius = 300,  // Bán kính vùng di chuyển hiệu ứng
  columns = 3,   // Số cột trong grid
  rows = 2,      // Số hàng trong grid
  damping = 0.45,// Độ mượt khi di chuột (dùng trong animation)
  fadeOut = 0.6, // Thời gian hiệu ứng mờ dần khi rời chuột
  ease = "power3.out", // Kiểu easing cho animation (từ thư viện GSAP)
}) => {

  // 🪣 Khai báo các ref để truy cập trực tiếp DOM
  const rootRef = useRef(null);  // Toàn bộ vùng grid
  const fadeRef = useRef(null);  // Lớp fade mờ phủ trên grid
  const setX = useRef(null);     // Setter cho vị trí X của hiệu ứng
  const setY = useRef(null);     // Setter cho vị trí Y của hiệu ứng
  const pos = useRef({ x: 0, y: 0 }); // Vị trí hiện tại của hiệu ứng chuột

  // 🧱 Lấy danh sách items được truyền từ props
  const data = items?.length ? items : [];

  // 🔧 Chạy khi component được mount
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // Tạo các setter nhanh cho hiệu ứng (thay đổi CSS variable)
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    // Lấy kích thước phần tử để đặt vị trí trung tâm ban đầu
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    // Đặt vị trí ban đầu của hiệu ứng
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  // 🌀 Hàm di chuyển hiệu ứng đến vị trí mới (dùng GSAP để tạo animation mượt)
  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  // 🖱️ Khi di chuột trong grid
  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  // 🚪 Khi chuột rời khỏi vùng grid
  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  // 🖲️ Cập nhật vị trí chuột trong mỗi card để tạo hiệu ứng gradient theo chuột
  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        "--r": `${radius}px`,
        "--cols": columns,
        "--rows": rows,
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {/* 🔹 Lặp qua danh sách item để hiển thị các card */}
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => onItemClick(c)} // Gọi hàm click từ props
          style={{
            "--card-border": c.borderColor || "transparent",
            "--card-gradient": c.gradient,
            cursor: "pointer", // Hiển thị con trỏ dạng tay khi hover
          }}
        >
          {/* 🖼️ Hình ảnh chính của card */}
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>

          {/* 📄 Thông tin hiển thị */}
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}

      {/* 🌈 Lớp overlay và fade để tạo hiệu ứng ánh sáng */}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
