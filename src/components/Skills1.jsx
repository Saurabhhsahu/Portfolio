import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Layout, Server, Wrench, Code, Sparkles, Languages } from "lucide-react";

const skills = [
  {
    category: "Language",
    icon: <Languages className="w-6 h-6" />,
    description: "Building beautiful, responsive interfaces",
    items: [
      "C/C++", "Java", "JavaScript",
      "Python"
    ],
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    description: "Building beautiful, responsive interfaces",
    items: [
      "HTML5", "CSS3", "JavaScript",
      "React", "Tailwind"
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    description: "Creating robust server-side applications",
    items: [
      "Node.js", "Express", "MongoDB",
      "SQL"
    ],
  },
  {
    category: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    description: "Leveraging modern development tools",
    items: [
      "Git", "Docker", "VS Code"
    ],
  },
];

function SkillCard({ name, delay }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute  inset-0 bg-gradient-to-r from-[#ff715b] to-[#ff715b] rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-30"
      />
      <div className="relative cursor-pointer p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center space-x-3 mb-2">
          <Sparkles className="w-5 h-5 text-[#ff715b]" />
          <span className="text-lg font-medium text-white">{name}</span>
        </div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="h-0.5 bg-gradient-to-r from-[#ff715b] to-transparent mb-4"
        />
      </div>
    </motion.div>
  );
}

function CategorySection({ category, items, delay, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${isActive ? "block" : "hidden"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          {category.icon}
          <h3 className="text-2xl font-semibold">{category.category}</h3>
        </div>
        <p className="text-gray-400">{category.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((skill, index) => (
          <SkillCard
            key={skill}
            name={skill}
            delay={delay + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-50"
    />
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="w-full bg-[#121f28] text-white relative overflow-hidden flex justify-center items-start">
      <ParticleBackground />

      <div className="w-full max-w-6xl px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My Skills
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#ff715b] to-transparent mx-auto max-w-md"
          />
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {skills.map((category, index) => (
            <motion.button
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(index)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full
                transition-all duration-300 cursor-pointer
                ${activeCategory === index
                  ? " text-white shadow-lg shadow-[#ff715b]"
                  : "bg-[#ff715b] hover:bg-[#f08a7a]"
                }
              `}
            >
              {category.icon}
              {category.category}
            </motion.button>
          ))}
        </div>

        {skills.map((category, index) => (
          <CategorySection
            key={category.category}
            category={category}
            items={category.items}
            delay={0.2}
            isActive={activeCategory === index}
          />
        ))}
      </div>
    </div>
  );
}