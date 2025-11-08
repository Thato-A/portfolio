// src/components/FloatingBackground/FloatingBackground.jsx
import { FaReact, FaNodeJs, FaDocker, FaHtml5, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiPython,
  SiPostman,
  SiKeystone,
  SiJest,
  SiMysql,
} from "react-icons/si";
import "./FloatingBackground.css";

export default function FloatingBackground() {
  const floatingIcons = [
    { Comp: FaReact, style: { top: "10%", left: "10%" } },
    { Comp: SiJavascript, style: { top: "20%", right: "10%" } },
    { Comp: FaDocker, style: { bottom: "15%", left: "15%" } },
    { Comp: SiTailwindcss, style: { bottom: "10%", right: "10%" } },
    { Comp: SiMongodb, style: { top: "20%", right: "25%" } },
    { Comp: FaNodeJs, style: { bottom: "30%", left: "5%" } },
    { Comp: FaHtml5, style: { top: "10%", left: "50%" } },
    { Comp: SiPython, style: { bottom: "40%", left: "30%" } },
    { Comp: SiPostman, style: { top: "40%", right: "30%" } },
    { Comp: SiKeystone, style: { top: "50%", right: "10%" } },
    { Comp: FaGitAlt, style: { bottom: "60%", left: "20%" } },
    { Comp: SiJest, style: { top: "10%", left: "30%" } },
    { Comp: SiMysql, style: { bottom: "30%", right: "20%" } },
  ];

  return (
    <div className="floating-background">
      {floatingIcons.map(({ Comp, style }, i) => (
        <div
          key={i}
          className="floating"
          style={{
            ...style,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + i}s`,
          }}
        >
          <Comp />
        </div>
      ))}
    </div>
  );
}
