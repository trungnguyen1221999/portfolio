import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Contact from "./components/Contact/Contaxt"
import {
  programmingLanguages,
  frontEnd,
  backEnd,
  marketing,
  listProyek,
} from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- Import modal hiển thị thông tin dự án
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import "aos/dist/aos.css"; // Có thể dùng <link> cho CSS này
import Business from "./components/business/business";
// Khởi tạo AOS (thư viện animation khi cuộn trang)
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal đang đóng

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // ⚙️ Kiểm tra nếu người dùng reload trang thì đưa về URL gốc
  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      window.location.replace(
        window.location.origin + import.meta.env.BASE_URL
      );
    }
  }, []);

  // 👀 Quan sát khi phần "about" xuất hiện trên màn hình
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 🌌 Hiệu ứng nền Aurora */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className=" mt-25 md:mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* 🧑‍💻 Phần giới thiệu chính */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className=" animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/Kai2.png" className="w-10 rounded-md" />
              <q>FULL STACK DEVELOPER</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hi I'm KAI"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <BlurText
              text="I feel at home where technology meets business — blending creativity, code, and commerce to build meaningful e-commerce experiences."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center justify-center md:justify-start  sm:gap-4 gap-2">
              {/* Nút tải CV */}
              <a
                href="./assets/CV.pdf"
                download="Kai_Nguyen_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              {/* Nút xem dự án */}
              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          {/* Thẻ hồ sơ bên phải */}
          <div className="mx-auto md:ml-auto animate__animated animate__fadeInUp animate__delay-4s md:mr-0 scale-90 md:scale-80 lg:scale-90">
            <ProfileCard
              name="Kai Nguyen"
              title="Web Developer"
              status="Online"
              handle=""
              contactText="Contact Me"
              avatarUrl="./assets/Kai.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
        </div>
        {/* 🧍‍♂️ Phần "About Me" */}
        <div
          className="z-1 mt-35 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 py-20 px-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {/* Cột trái: thông tin cá nhân */}
            <div className="basis-full md:basis-8/12 pr-0 md:pl-8 border-b md:border-b-0 md:border-l border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="My name is Trung Nguyen, but you can call me Kai.
I’m a web Developer with a background in eCommerce.
After years of running online stores, I’ve learned how technology, user experience, and marketing work together to drive real business growth.
I understand the full eCommerce journey — from product setup and supplier management to ads and conversion optimization."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                {/* Thống kê nhỏ */}
                <div className="flex wrap flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full space-x-1">
                  <div>
                    <h1 className="text-3xl mb-1">
                      10<span className="text-violet-500">+ Projects</span>
                    </h1>
                    <p className=" text-xl md:text-base">in Web and Game</p>
                  </div>
                  <div>
                    <h1 className="text-3xl  mb-1">
                      2<span className="text-violet-500">+ Years</span>
                    </h1>
                    <p className=" text-xl md:text-base">of Learning Coding</p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <h1 className="text-3xl mb-1">
                      5<span className="text-violet-500 ">+ Years</span>
                    </h1>
                    <p className=" text-xl md:text-base">
                      {" "}
                      of Experience in eCommerce
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: hiển thị Lanyard 3D */}
            <div className="basis-full md:basis-4/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <img
                src="./assets/Kai3.jpg"
                alt=""
                className="rounded-3xl border-[2px] border-cyan-500/40 shadow-md"
              />
            </div>
          </div>
        </div>
        {/* 🧠 Skills Section */}
        <div className="skills mt-32 space-y-20">
          {/* 💻 Programming Languages */}
          <div>
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up">
              Programming Languages
            </h1>
            <div className="tools-box mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {programmingLanguages.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={item.id * 100}
                  className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-lg font-semibold truncate">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🎨 Front End */}
          <div>
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up">
              Front End
            </h1>
            <div className="tools-box mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {frontEnd.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={item.id * 100}
                  className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-lg font-semibold truncate">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ⚙️ Back End */}
          <div>
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up">
              Back End
            </h1>
            <div className="tools-box mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {backEnd.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={item.id * 100}
                  className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-lg font-semibold truncate">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 📢 Marketing */}
          <div>
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up">
              Marketing
            </h1>
            <div className="tools-box mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {marketing.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={item.id * 100}
                  className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-lg font-semibold truncate">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 💼 Phần dự án */}
        <div className="proyek mt-22 py-10" id="project"></div>
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center opacity-50">
          Showcasing a selection of projects that reflect my skills and
          creativity.
        </p>

        {/* Lưới hiển thị dự án */}
        <div className="proyek-box mt-14">
          <div style={{ height: "auto", position: "relative" }}>
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Gửi hàm xử lý khi click vào 1 dự án
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* own business */}
        <Business />

        {/* 📬 Phần liên hệ */}
      <Contact/>

        {/* Biểu tượng mạng xã hội - fixed bên phải, dưới 1/3 màn hình */}
        <div className="fixed right-4 md:right-10 top-[66vh] z-50 flex flex-col gap-3 scale-50 animate-bounce">
          <a
            href="https://github.com/trungnguyen1221999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-500 transition-colors"
          >
            <i className="ri-github-fill ri-6x"></i>
          </a>
        </div>
      </main>

      {/* 🪟 Modal hiển thị chi tiết dự án */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
