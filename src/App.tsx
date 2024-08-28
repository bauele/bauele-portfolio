import "./App.css";

import { ProjectCard } from "./components/ProjectCard";
import { HoverOrb } from "./components/HoverOrb";

function App() {
  return (
    <div className="app abel-regular ">
      <div className="page-container">
        <nav className="navbar">Bauele Portfolio</nav>
        <div className="hero">
          <li className="orb"></li>
          <div className="hero-text">
            <h1>Hello World</h1>
            <p className="hero-introduction">
              My name is <span className="keyword">Kyle</span>.
            </p>
            <div className="hero-description">
              <p>
                I'm a full stack developer based out of Pennsylvania. I'm
                passionate about bringing my ideas to life and paying careful
                attention to the small details that give my projects my own
                unique personal touch.
              </p>
              <button className="abel-regular button">Contact Me</button>
            </div>
          </div>
          <div className="image-container">
            <div className="sun-logo-lg" />
          </div>
        </div>

        <div className="about-skills-container">
          <div className="about">
            <span className="orb"></span>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="skills">
            <span className="orb"></span>
            <h2>Skills</h2>

            <div className="skills-list">
              <div className="front-end-list">
                <h3>Front-End</h3>
                <ul>
                  <HoverOrb>
                    <li>JavaScript</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>TypeScript</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>React</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>Figma</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>Responsive Design</li>
                  </HoverOrb>
                </ul>
              </div>

              <div className="back-end-list">
                <h3>Back-End</h3>
                <ul>
                  <HoverOrb>
                    <li>JavaScript</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>TypeScript</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>Node.js</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>Express</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>SQL</li>
                  </HoverOrb>
                  <HoverOrb>
                    <li>MongoDB</li>
                  </HoverOrb>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          {<span className="orb"></span>}

          <h2>Projects</h2>
          <div className="projects-container">
            <ProjectCard
              name="Pantry"
              imagePath="./pantry-app.png"
              description="A food-tracking solution designed to show you where your money is best
          spent based on where you're already shopping. Built with React,
          Typescript, Node, Express, MongoDB, and Google Firebase."
              demoLink="https://pantry.bauele.com/"
              githubLink="https://github.com/pantry-bauele"
            />
            <ProjectCard
              name="Stars and Moons"
              imagePath="./stars-app.png"
              description="A multiplayer recreation of the classic tic tac toe game.
          Built with Vue, Node, Express, and SocketIO."
              demoLink="https://game.bauele.com//"
              githubLink="https://github.com/bauele/stars-and-moons"
            />
          </div>
        </div>
        <div className="footer">{<span className="orb"></span>}</div>
      </div>
    </div>
  );
}

export default App;
