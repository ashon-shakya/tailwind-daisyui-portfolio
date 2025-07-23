import "./index.css";
import profilePic from "./assets/profile.jpg";
import { useEffect, useState } from "react";
import profile_1 from "./assets/profile_1.jpg";
import profile_2 from "./assets/profile_2.jpg";
import profile_3 from "./assets/profile_3.jpg";
import profile_4 from "./assets/profile_4.jpg";
import profile_5 from "./assets/profile_5.jpg";
import profile_6 from "./assets/profile_6.jpg";
import profile_7 from "./assets/profile_7.jpg";
import profile_8 from "./assets/profile_8.jpg";
import profile_9 from "./assets/profile_9.jpg";

import project_1 from "./assets/project_1.jpg";
import project_2 from "./assets/project_2.jpg";
import project_3 from "./assets/project_3.jpg";
import project_4 from "./assets/project_4.jpg";
import project_5 from "./assets/project_5.jpg";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {};

  return (
    <>
      <div className="bg-base-100 w-full">
        <div className="max-w-6xl mx-auto ">
          {/* Navbar */}
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">Portfolio</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#project">Projects</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Theme selector */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg
                  width="12px"
                  height="12px"
                  className="inline-block h-2 w-2 fill-current opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
              >
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Default"
                    value="default"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Retro"
                    value="retro"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Cyberpunk"
                    value="cyberpunk"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Valentine"
                    value="valentine"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Aqua"
                    value="aqua"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Custom"
                    value="custom"
                  />
                </li>
              </ul>
            </div>

            {/* theme toggle */}
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {/* Carousel */}
          <div className="carousel rounded-box mt-2 gap-2" id="home">
            <div className="carousel-item">
              <img src={profile_1} alt="Burger" />
            </div>
            <div className="carousel-item">
              <img src={profile_7} alt="Burger" />
            </div>
            <div className="carousel-item">
              <img src={profile_6} alt="Profile 1" />
            </div>
            <div className="carousel-item">
              <img src={profile_9} alt="Burger" />
            </div>
            <div className="carousel-item">
              <img src={profile_4} alt="Burger" />
            </div>
            <div className="carousel-item">
              <img src={profile_5} alt="Burger" />
            </div>
          </div>

          {/* stats */}
          <div className="divider  text-2xl font-bold my-10" id="skills">
            Skills
          </div>
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-figure text-blue-700 text-6xl">
                <FaHtml5 />
              </div>
              <div className="stat-title">Core HTML</div>
              <div className="stat-value text-blue-700">HTML</div>
              <div className="stat-desc">Markup Master</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-pink-500 text-6xl">
                <FaCss3Alt />
              </div>
              <div className="stat-title">Styling CSS</div>
              <div className="stat-value text-pink-500">CSS</div>
              <div className="stat-desc">Design Precision</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-yellow-400 text-6xl">
                <RiJavascriptFill />
              </div>
              <div className="stat-title">JavaScript</div>
              <div className="stat-value text-yellow-400">JS</div>
              <div className="stat-desc">Code Fluency</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-green-400 text-6xl">
                <FaNode />
              </div>
              <div className="stat-title">Node Runtime</div>
              <div className="stat-value text-green-400">Node</div>
              <div className="stat-desc">Server Efficiency</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-sky-400 text-6xl">
                <FaReact />
              </div>
              <div className="stat-title">React Framework</div>
              <div className="stat-value text-sky-400">React</div>
              <div className="stat-desc">Component Craft</div>
            </div>
          </div>

          {/* About */}
          <div className="flex flex-col gap-10 items-center" id="about">
            <div className="hero bg-base-100 min-h-[600px] mt-10 p-20">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={profile_6}
                  className="max-w-sm rounded-4xl shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold text-primary">About Me!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Contact Me</button>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-2xl">Education</h3>
            <ul className="timeline">
              <li>
                <div className="timeline-start">2008</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
                  School Leaving Certificate
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">2010</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">I.Sc</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">2014</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Bachelor</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">2016</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Masters</div>
                <hr />
              </li>
            </ul>
          </div>

          {/* Project Cards */}
          <div className="divider  text-2xl font-bold my-10" id="project">
            Projects
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-10 p-10 flex-wrap justify-between">
              <div className="card bg-base-100 max-w-80 shadow-sm">
                <figure>
                  <img src={project_1} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Portfolio
                    <div className="badge badge-primary">HTML</div>
                    <div className="badge badge-secondary">CSS</div>
                  </h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Github</div>
                    <div className="badge badge-accent">Live Site</div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 max-w-80 shadow-sm">
                <figure>
                  <img src={project_2} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Movie World
                    <div className="badge badge-primary">HTML</div>
                    <div className="badge badge-info">JS</div>
                  </h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Github</div>
                    <div className="badge badge-accent">Live Site</div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 max-w-80 shadow-sm">
                <figure>
                  <img src={project_3} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Financial Tracker
                    <div className="badge badge-primary">Node</div>
                    <div className="badge badge-info">React</div>
                  </h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Github</div>
                    <div className="badge badge-accent">Live Site</div>
                  </div>
                </div>
              </div>
            </div>

            {/* pagination */}
            <div className="join">
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="1"
                checked="checked"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="2"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="3"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="4"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="hero min-h-[600px]" id="contact">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Contact now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <textarea
                      placeholder="Bio"
                      className="textarea textarea-md"
                    ></textarea>

                    <button className="btn btn-neutral mt-4">Contact</button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}

          <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Web Development</a>
              <a className="link link-hover">API Design</a>
              <a className="link link-hover">UI Design</a>
              <a className="link link-hover">Project Management</a>
            </nav>
            <nav>
              <h6 className="footer-title">Menu</h6>
              <a className="link link-hover">Home</a>
              <a className="link link-hover">About</a>
              <a className="link link-hover">Project</a>
              <a className="link link-hover">Contact</a>
            </nav>
            <nav>
              <h6 className="footer-title">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}
