import { useState, useEffect, useRef } from "react";
import "./SkillStats.css";

function SkillStats() {
  const [visible, setVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const useCount = (start, end, duration) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      if (!visible) return;
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));

        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }, [visible, start, end, duration]);

    return count;
  };

  const techCount = useCount(4, 10, 2000);
  const areasCount = useCount(1, 5, 2200);
  const proficiencyCount = useCount(72, 83, 2500);
  const skillsCount = useCount(11, 20, 2000);

  return (
    <section className="skills-stats" ref={statsRef}>
      <div className="stats-container">
        <div className="stat">
          <h2>{techCount}+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat">
          <h2>{areasCount}</h2>
          <p>Expertise Areas</p>
        </div>

        <div className="stat">
          <h2>{proficiencyCount}%</h2>
          <p>Avg. Proficiency</p>
        </div>

        <div className="stat">
          <h2>{skillsCount}+</h2>
          <p>Skills Total</p>
        </div>
      </div>

      <div className="stats-divider">
        <span className="line"></span>
        <span className="dot"></span>
        <span className="line"></span>
      </div>
    </section>
  );
}

export default SkillStats;
