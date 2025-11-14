import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

export const ChromaGrid = ({
  items,
  onItemClick,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const data = items?.length ? items : [];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

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

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

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
        width: "100%",
        padding: "0",
        margin: "0",
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card flex flex-col overflow-hidden w-full"
          onMouseMove={handleCardMove}
          onClick={() => onItemClick(c)}
          style={{
            "--card-border": c.borderColor || "transparent",
            "--card-gradient": c.gradient,
            cursor: "pointer",
          }}
        >
          <div
            className="chroma-img-wrapper flex-shrink-0 w-full overflow-hidden"
            style={{ height: "450px" }}
          >
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <footer
            className="chroma-info p-5 flex flex-col"
            style={{ minHeight: "140px" }}
          >
            <div className="flex-1">
              <h3 className="name text-lg md:text-xl font-semibold mb-1 line-clamp-1">
                {c.title}
              </h3>
              {c.handle && (
                <span className="handle text-sm text-gray-500 block mb-1 line-clamp-1">
                  {c.handle}
                </span>
              )}
              <p className="role text-sm text-gray-700 line-clamp-2 mb-2">
                {c.subtitle}
              </p>
            </div>

            {/* Tech Stack Tags - Dark Theme */}
            {c.tenchStack && c.tenchStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {c.tenchStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs font-medium rounded-full bg-black text-white border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {c.location && (
              <span className="location text-xs text-gray-400 mt-2">
                {c.location}
              </span>
            )}
          </footer>
        </article>
      ))}

      {/* Overlay & Fade */}
      <div
        ref={fadeRef}
        className="chroma-fade hidden md:block md:fixed inset-0 z-50 pointer-events-none"
      />
    </div>
  );
};

export default ChromaGrid;
