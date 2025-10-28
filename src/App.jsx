import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Contact from "./components/Contact/Contaxt";

import {
  programmingLanguages,
  frontEnd,
  backEnd,
  marketing,
  listProyek,
} from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import "aos/dist/aos.css";
import Business from "./components/business/business";
import ElectricBorder from "./components/ElectricBorder/ElectricBorder";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      window.location.replace(
        window.location.origin + import.meta.env.BASE_URL
      );
    }
  }, []);

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

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 🌌 Background Aurora */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="mt-20 md:mt-10 max-w-6xl mx-auto px-3 sm:px-4 z-10 overflow-x-hidden">
        {/* 🧑‍💻 Hero */}
        <div className="hero grid md:grid-cols-2 items-center pt-6 md:pt-10 gap-6 mt-10 md:mt-0">
          {/* Hero text */}
          <div className="animate__animated animate__fadeInUp animate__delay-3s flex flex-col space-y-5">
            {/* Chức danh */}
            <div className="flex items-center gap-3 bg-zinc-800 w-fit p-2 sm:p-3 rounded-xl">
              <img src="./assets/Kai2.png" className="w-8 rounded-md" />
              <q className="">FULL STACK DEVELOPER</q>
            </div>

            {/* Tiêu đề chính */}
            <h1 className="text-3xl sm:text-4xl font-bold">
              <ShinyText text="Hi I'm KAI" disabled={false} speed={3} />
            </h1>

            {/* Mô tả */}
            <BlurText
              text="I feel at home where technology meets business — blending creativity, code, and commerce to build meaningful e-commerce experiences."
              delay={150}
              animateBy="words"
              direction="top"
              className="sm:text-sm md:text-base leading-relaxed"
            />

            {/* Nút hành động */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <a
                href="./assets/CV.pdf"
                download="Kai_Nguyen_CV.pdf"
                className="font-semibold bg-[#1a1a1a] py-2 px-3 sm:px-4 text-xs sm:text-base rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] py-2 px-4 text-xs sm:text-base rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Explore Projects" disabled={false} speed={3} />
              </a>
            </div>
          </div>

          {/* Profile card */}
          <div className="mx-auto md:mr-0 animate__animated animate__fadeInUp animate__delay-4s scale-90 md:scale-75 lg:scale-85">
            <ProfileCard
              name="Kai Nguyen"
              title="Web Developer"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/Kai.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
        </div>

        {/* 🙋‍♂️ About Me */}
        <div
          ref={aboutRef}
          id="about"
          className="z-1 mt-16 mx-auto w-full max-w-[1400px]"
        >
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <div className="rounded-2xl border-[2px] md:border-[3px] p-4 sm:p-6">
              <div
                className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-8 py-6"
                data-aos="fade-up"
              >
                <div className="basis-full md:basis-8/12 pr-0 md:pl-6 border-b md:border-b-0 md:border-l border-violet-500/30">
                  <h2 className="text-xl sm:text-3xl font-bold mb-3 text-white">
                    About Me
                  </h2>

                  <BlurText
                    text="My name is Trung Nguyen, but you can call me Kai. I’m a web developer with a background in eCommerce. After years of running online stores, I’ve learned how technology, user experience, and marketing work together to drive real business growth."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-xs sm:text-base leading-relaxed mb-6 text-gray-300"
                  />

                  <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-4 sm:gap-y-0 w-full">
                    <div>
                      <h1 className="text-xl md:text-2xl mb-1">
                        10<span className="text-violet-500">+ Projects</span>
                      </h1>
                      <p className="text-sm">in Web and Game</p>
                    </div>
                    <div>
                      <h1 className="text-xl md:text-2xl mb-1">
                        2<span className="text-violet-500">+ Years</span>
                      </h1>
                      <p className="text-sm">of Learning Coding</p>
                    </div>
                    <div>
                      <h1 className="text-xl md:text-2xl mb-1 ">
                        5<span className="text-violet-500">+ Years</span>
                      </h1>
                      <p className="text-sm pb-6 md:pb-0">
                        of Experience in eCommerce
                      </p>
                    </div>
                  </div>
                </div>

                <div className="basis-full md:basis-4/12 flex justify-center">
                  <img
                    src="./assets/Kai3.jpg"
                    alt="profile"
                    className="rounded-2xl border border-cyan-500/40 shadow-md max-w-[240px] sm:max-w-[320px]"
                  />
                </div>
              </div>
            </div>
          </ElectricBorder>
        </div>
        {/* 🧠 Skills */}
        <div className="skills mt-16 space-y-12">
          {[
            { title: "Programming Languages", data: programmingLanguages },
            { title: "Front End", data: frontEnd },
            { title: "Back End", data: backEnd },
            { title: "Marketing", data: marketing },
          ].map((section, index) => (
            <div key={index}>
              <h1
                className="text-xl sm:text-3xl font-bold mb-3"
                data-aos="fade-up"
              >
                {section.title}
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {section.data.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-zinc-700 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 transition-all shadow-sm"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain bg-zinc-800 p-1.5 sm:p-2 rounded-md"
                    />
                    <p className="text-xs sm:text-sm font-semibold truncate">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 💼 Projects */}
        <div className="proyek mt-16" id="project">
          <div className="p-6 sm:p-8 rounded-2xl">
            <h1 className="text-center text-2xl sm:text-3xl font-bold mb-2 text-white">
              Projects
            </h1>
            <p className="text-center text-xs sm:text-sm opacity-60 md:mb-6 -mb-6 text-gray-200">
              A selection of works showcasing my development journey.
            </p>
            <div className="scale-90 sm:scale-100">
              <ChromaGrid
                items={listProyek}
                onItemClick={handleProjectClick}
                radius={400}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </div>

        {/* 🏢 Business */}
        <Business />

        {/* 📬 Contact */}
        <div className="scale-95 sm:scale-100 px-2 sm:px-4">
          <Contact />
        </div>

        <div className="h-20 md:h-10"></div>

        {/* 🌐 Social */}
        <div className="fixed right-2 bottom-40 md:right-10 z-50 flex flex-col gap-2 animate-bounce md:scale-130">
          <a
            href="https://github.com/trungnguyen1221999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-500 transition-colors"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
