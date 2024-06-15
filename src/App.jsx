import alien from "../public/alien.png";
import leetcode from "../public/leetcode.svg";
import github from "../public/github.svg";
import homecover from "../public/panda2.jpg";
import html from "../public/html.svg";
import css from "../public/css.svg";
import firebase from "../public/firebase.svg";
import mongodb from "../public/mongodb.svg";
import mysql from "../public/mysql.svg";
import nodejs from "../public/nodejs.svg";
import sass from "../public/sass.svg";
import tailwind from "../public/tailwindcss.svg";
import postman from "../public/postman.svg";
import lowergradient from "../public/lowergradient.png";
import javascript from "../public/javascript.svg";
import cpp from "../public/cpp.svg";
import react from "../public/react-2.svg";
import redux from "../public/redux.svg";
import retrade from "../public/Picture1.png";
import blogzapp from "../public/blogzapp.jpeg";
import moviewiki from "../public/moviewiki.png";
import roughmusicplayer from "../public/roughmusicplayer.png";
import verticalgradient from "../public/verticalgradient.png";
import 'react-toastify/dist/ReactToastify.css';
import { GiHamburgerMenu } from "react-icons/gi";
import linkedinwhite from "../public/linkedinwhite.svg";

import "./index.css";
import Typing from "./components/Typing";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';




const skills = [
  { name: "Html", path: html },
  { name: "Css", path: css },
  { name: "Firebase", path: firebase },
  { name: "mongoDB", path: mongodb },
  { name: "MySql", path: mysql },
  { name: "Nodejs", path: nodejs },
  { name: "Sass", path: sass },
  { name: "Tailwind", path: tailwind },
  { name: "Postman", path: postman },
  { name: "JavaScript", path: javascript },
  { name: "C++", path: cpp },
  { name: "React", path: react },
  { name: "Redux", path: redux },
];

const projects = [
  {
    name: "ReTrade: Marketplace for Refursbhished goods",
    Description: `Developed ReTrade, a refurbished goods marketplace, enhancing engagement with product bidding, admin panel, comments, and notifications.Implemented JWT authentication, integrated multer and cloudinary for efficient image handling, and utilized Redux and TailwindCSS for dynamic filtering and responsive UI.Designed secure, role-based authorization for distinct admin and user routes.Implemented payment intergration using razorpay.Implemented new feature of product biding.`,
    techStack: [
      "Reactjs",
      "Nodejs",
      "MongoDb",
      "Tailwind",
      "Redux",
      "RazorPay",
    ],
    Live: "https://retrade-1.onrender.com",
    Github: "https://github.com/vivekpandey074/ReTrade",
    path: retrade,
  },
  {
    name: "Blogz-App",
    Description: `Developed a blog application using React, Firebase for authentication, data storage, and backend
    services.Implemented user-friendly features including blog creation, update, delete, search, like, comment, and
    dislike functionalities.`,
    techStack: ["Reactjs", "Scss", "Firebase"],
    Live: "https://react-blogz-app.web.app/",
    Github: "https://github.com/vivekpandey074/blogz-app",
    path: blogzapp,
  },
  {
    name: "Movies-wiki",
    Description: `Designed and implemented a Movies Wikipedia app in React.
    Leveraging Redux for state management and React Router for navigation, while seamlessly
    integrating data from the TMDB API.`,
    techStack: ["Reactjs", "Scss", "Redux"],
    Live: "https://movie-wiki-074.netlify.app/",
    Github: "https://github.com/vivekpandey074/movie-wiki",
    path: moviewiki,
  },
  {
    name: "Rough Music Player",
    Description: `Developed a music player application with React, SCSS, and Spotify API integration for real-time
    music streaming.Implemented secure user authorization using Spotify API.`,
    techStack: ["Reactjs", "Scss", "Spotify Api"],
    Live: "https://rough-music-player.netlify.app/",
    Github: "https://github.com/vivekpandey074/Music-player-application",
    path: roughmusicplayer,
  },
];




   


function formatParagraph(paragraph) {
  const sentences = paragraph
    .split(".")
    .filter((sentence) => sentence.trim().length > 0);

  return sentences;
}

function App() {

 const HomeRef=useRef(null);
 const SkillsRef=useRef(null);
 const EducationRef=useRef(null);
 const ProjectsRef=useRef(null);
 const ContactRef=useRef(null);
 const formref=useRef(null);

 const [showNav,setShowNav]=useState(false);
  
 const scrollToSectionHome = () => {
  setActive("Home")
  HomeRef.current.scrollIntoView({ behavior: 'smooth' });
};
 const scrollToSectionSkills = () => {
  setActive("Skills")
  SkillsRef.current.scrollIntoView({ behavior: 'smooth' });
};
 const scrollToSectionEducation = () => {
  setActive("Education")
  EducationRef.current.scrollIntoView({ behavior: 'smooth' });
};
 const scrollToSectionProjects = () => {
  setActive("Projects")
  ProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
};
 const scrollToSectionContact = () => {
  setActive("Contact")
  ContactRef.current.scrollIntoView({ behavior: 'smooth' });
};

const [active,setActive]=useState("Home");


const [formData, setFormData] = useState({
  email: '',
  subject: '',
  message: '',
});

const {email,subject,message}=formData;

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};





const onContactSubmit=(e)=>{
   e.preventDefault();

  
   const {  email, subject, message } = formData;
   const mailtoLink = `mailto:?to=vivekpande074@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Email: ${email}\n\nMessage:\n${message}`)}`;


   window.location.href = mailtoLink
  }

   


  return (
    <>
      <header className="bg-black w-full sm:h-20 flex flex-row justify-center overflow-hidden">
        <div className=" w-4/5 sm:max-w-[2000px] flex flex-col sm:flex-row sm:items-center sm:text-xl  sm:justify-between pt-4">
          <div className="sm:block flex flex-row  justify-between ">
            <img src={alien} alt="logo" className="w-10 sm:w-12" />
            <div className="text-white sm:hidden">{showNav? <RxCross2  size={30} onClick={()=>setShowNav(false)}/>:<GiHamburgerMenu size={30} onClick={()=> setShowNav(true)}/>}</div>
          </div>
          <nav className="flex w-full justify-center sm:w-fit  flex-col sm:flex-row cursor-pointer ">
          
            <ul className={`${showNav? "":"hidden"} flex sm:flex  flex-col gap-2 items-center  sm:flex-row font-Calsans sm:gap-4 md:gap-6 lg:gap-8 sm:justify-around sm:items-center text-white sm:text-sm  md:text-lg 2xl:text-3xl font-[400]`}>
              
              <li onClick={scrollToSectionHome} className={`${active==="Home"? "text-purple-300":""} hover:text-purple-300`}>Home</li>
              <li  onClick={scrollToSectionSkills} className={`${active==="Skills"? "text-purple-300":""} hover:text-purple-300`}>Skills</li>
              <li  onClick={scrollToSectionEducation} className={`${active==="Education"? "text-purple-300":""} hover:text-purple-300`}>Education</li>
              <li  onClick={scrollToSectionProjects} className={`${active==="Projects"? "text-purple-300":""} hover:text-purple-300`}>Projects</li>
              <li  onClick={scrollToSectionContact} className={`${active==="Contact"? "text-purple-300":""} hover:text-purple-300`}>Contact</li>
              <li>
                <a href="https://leetcode.com/u/vivekpande0512/">
                  <img src={leetcode} alt="" className="w-8" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vivek-pandey-45884520a">
                  <img src={linkedinwhite} alt="" className="w-6" />
                </a>
              </li>
              <li>
                <a href="https://github.com/vivekpandey074">
                  <img src={github} alt="" className="w-12" />
                </a>
              </li>
            </ul>
          </nav>
         
        </div>
      </header>

      <main className="w-full bg-black flex flex-row justify-center ">
        <div className="relative w-full max-w-[2000px] flex flex-col items-center">
          {/*HERO SECTION$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$444444  */}
          <section  ref={HomeRef} className=" w-full sm:h-4/5  opacity-70 ">
            <img
              src={homecover}
              alt=""
              className=" absolute w-full sm:h-screen h-[60vh] z-[-1]"
            />

            <div className=" w-full absolute sm:h-screen  h-[60vh]  bg-black opacity-30"></div>
            <img src={verticalgradient} alt="" className=" w-full sm:h-screen h-[60vh]" />
            <div className="absolute left-[20%] top-[50px] w-3/4 ">
             
              <Typing paragraph={"Hey there, I'm Vivek Pandey!.Passionate MERN stack developer with a knack for solving data structures and algorithm problems.Let's create something awesome together. 🚀"}/>
            
            </div>
          </section>
          {/* //SKILLS SECTIONS */}
          <section ref={SkillsRef} className=" relative bg-black h-3/5  w-full ">
            <h1 className=" text-center font-Calsans font-[800] mb-16 mt-5 text-4xl font-CalSans text-purple-200">
              Skills
            </h1>
            <div className="max-w-[1500px]  w-3/5 h-3/5 gap-12  font-singleDay text-xl m-auto text-white  flex flex-row flex-wrap justify-center items-center">
              {skills.map((skill) => (
                <div className="flex flex-col items-center">
                  <img
                    src={skill.path}
                    alt=""
                    className="h-10 h:w-20 aspect-square "
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </section>
          {/* //Education */}
          <section ref={EducationRef} className="flex flex-col px-8 items-center w-full">
            <h1 className="font-Calsans font-[800]  my-16 text-4xl font-CalSans text-purple-200">
              Education
            </h1>

            <ol class="relative  border-s-4   border-gray-700">
              <li class="ms-4 my-10">
                <div class="absolute w-3 h-3 border-8 border-purple-500  rounded-full mt-1.5 -start-2"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  July 2020 - July 2024
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  University School of Communication, Information & Technology,
                  Dwarka, New Delhi
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Bachelor of Technology in Information Technology, CGPA: 8.8
                  (till 7th sem)
                </p>
              </li>
              <li class="ms-4 my-10">
                <div class="absolute w-3 h-3 border-8 border-purple-500  rounded-full mt-1.5 -start-2 "></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2018 - April 2019{" "}
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Kendirya Vidyalaya Tughlakabad
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  12th CBSE Board, Percentage: 87.8
                </p>
              </li>

              <li class="ms-4 my-10">
                <div class="absolute w-3 h-3 border-8 border-purple-500  rounded-full mt-1.5 -start-2 "></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2016 - April 2017{" "}
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Kendriya Vidyalaya Tughlakabad
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  10th CBSE Board, CGPA:10{" "}
                </p>
              </li>
            </ol>
          </section>
          {/* Projects Sections $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}
          <section ref={ProjectsRef} className="flex flex-col items-center w-full mt-4">
            <h1 className=" text-center font-Calsans font-[800]  mb-10 text-4xl font-CalSans text-purple-200">
              Projects
            </h1>
            <div className="w-full flex flex-col items-center">
              {projects.map((project) => (
                <div className="w-4/5  h-[400px]  sm:h-[300px] my-10 flex  flex-col sm:flex-row  font-roboto bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  
                  <img
                    className="rounded-t-lg sm:w-1/2 w-full  h-[150px] sm:h-full"
                    src={project.path}
                    alt=""
                  />
                  <div class="p-5 style-scrollbar overflow-y-scroll  sm:w-1/2 ">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                        {project.name}
                      </h5>
                      <h5 className="mb-2 text-lg font-Dmsans text-gray-300 font-[500]">
                        {project.techStack.join(", ")}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <ul className="">
                        {" "}
                        {formatParagraph(project.Description).map(
                          (line, index) => (
                            <li className="my-2 ">
                              {index + 1}.{line}.
                            </li>
                          )
                        )}
                      </ul>
                    </p>
                    <a
                      href={project.Github}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                    {project.Live !== "" ? (
                      <a
                        href={project.Live}
                        class="ms-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Live
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    ) : null}
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          
  <section ref={ContactRef}  className="bg-black w-full">        
  <div className="py-8 lg:py-16 px-4 w-4/5 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Write an Email:</p>
      <form onSubmit={onContactSubmit}  ref={formref}  className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email"  name="email" onChange={handleChange} id="email" value={email} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name="subject"  onChange={handleChange}  value={subject} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how can i help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message" rows="6" onChange={handleChange}  value={message} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg  hover:bg-gray-700 sm:w-fit  bg-[#1e293b]">Send message</button>
      </form>
  </div>


          </section>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
