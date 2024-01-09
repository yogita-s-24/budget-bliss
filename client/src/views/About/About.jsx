import React, { useEffect } from "react";
import Navbar from "./../../components/Navbar/Navbar.jsx";
import Img from "./../../views/About/me.jpeg";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiPeerlist } from "react-icons/si";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "Budget Files - About";
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-4/6 text-center mx-auto mt-16 font-serif ">
        Hey there! Welcome to my personal project, the{" "}
        <span className="text-violet-900 text-2xl">Budget Bliss</span> Expense
        Tracker. <br />I made this because handling money can be tricky, and I
        wanted to create a simple tool to help me and others keep track of
        expenses without any hassle.
      </div>
      <div className="border-2 flex items-center bg-violet-400  mt-10 gap-x-12 justify-center lg:w-[700px] md:w-[500px]  sm:w-[300px] mx-auto p-6 rounded-md shadow-md flex-wrap  border-violet-800 ">
        <div>
          <img
            src={Img}
            alt="img"
            className="h-44 w-44 rounded-full border-2 border-violet-800"
          />
          <p className="flex justify-around mt-5 bg-white p-2 rounded-md shadow-md">
            <Link to="https://www.linkedin.com/in/yogita-shete/">
              <ImLinkedin className="text-blue-900 text-3xl" />
            </Link>
            <Link to="https://github.com/yogita-s-24">
              <FaGithubSquare className="text-black-900 text-3xl" />
            </Link>
            <Link to="yogitashete24@gmail.com">
              <MdEmail className="text-red-600 text-3xl" />
            </Link>
            <Link to="https://peerlist.io/yogitashete">
              <SiPeerlist className="text-green-500 text-3xl" />
            </Link>
          </p>
        </div>
        <div className="w-96 bg-white mt-3 rounded-md shadow-md">
          <h1 className="text-center text-2xl p-1 text-violet-900 underline font-serif">
            Yogita Shete
          </h1>
          <p className="p-4 text-start font-extra-light text-[15px]">
            I love making websites! I use a cool tech stack called MERN
            (MongoDB, Express.js, React, Node.js) to build awesome,
            user-friendly sites. Whether it's making things look great or work
            smoothly, I'm all about turning ideas into fantastic web
            experiences. Let's bring your website dreams to life!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
