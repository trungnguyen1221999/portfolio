import Aurora from "./Aurora/Aurora";
import { useState, useEffect } from "react";
import CountUp from "./CountUp/CountUp";

const PreLoader = () => {
  const [loading, setLoading] = useState(true); // Trạng thái hiển thị preloader
  const [countDone, setCountDone] = useState(false); // Kiểm tra xem CountUp đã hoàn thành chưa
  const [fadeText, setFadeText] = useState(false); // Fade text
  const [fadeScreen, setFadeScreen] = useState(false); // Fade toàn màn hình

  useEffect(() => {
    if (countDone) {
      // Tạo hiệu ứng fade cho text
      const fadeTextTimer = setTimeout(() => setFadeText(true), 2000);

      // Tạo hiệu ứng fade toàn màn hình
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 1000);

      // Ẩn hoàn toàn preloader sau khi fade xong
      const hideTimer = setTimeout(() => setLoading(false), 2000);

      // Dọn các timer khi component unmount hoặc dependency thay đổi
      return () => {
        clearTimeout(fadeTextTimer);
        clearTimeout(fadeScreenTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [countDone]);

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-1000 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Hiệu ứng Aurora nền */}
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />

        {/* Text đếm ngược */}
        <div
          className={`absolute text-white text-6xl font-bold transition-all duration-1000 ${
            fadeText ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <CountUp
            from={50}
            to={100}
            separator=","
            direction="up"
            duration={0.5}
            className="count-up-text"
            onEnd={() => setCountDone(true)} // Khi CountUp kết thúc, bật effect fade
          />
        </div>
      </div>
    )
  );
};

export default PreLoader;
