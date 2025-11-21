import React, { useEffect, useState } from "react";
import "./AboutMe.css";

const profilePic = process.env.PUBLIC_URL + "/Images/profile.jpg";
const aboutBg = process.env.PUBLIC_URL + "/Images/aboutme.jpg";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setSectionHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="about-me"
      id="about"
      style={{
        height: `${sectionHeight}px`,
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* 🔹 Return button in top-right */}
      <button className="return-btn" onClick={() => navigate(-1)}>
        ⬅ Return
      </button>

      <div className="overlay">
        <div className="about-container">
          <img src={profilePic} alt="Renish R" className="profile-img" />

          <div className="about-content">
            <h1>Renish R</h1>
            <p className="tagline">
              Java Backend Developer | Passionate about Building Robust & Scalable Systems
            </p>

            <h2>About Me</h2>
            <p>
              Hi, I’m <strong>Renish R</strong> — a passionate{" "}
              <strong>Java Backend Developer</strong> skilled in{" "}
              <strong>Java, Spring Boot, MySQL, MongoDB</strong>, and{" "}
              frontend technologies like <strong>React</strong>, turning
              ideas into impactful solutions.
            </p>

            <h2>Skills</h2>
            <ul className="skills-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>MongoDB</li>
            </ul>

            <h2>Find Me On</h2>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/renish-r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Renish-R"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Portfolio (Building)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
