import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'

function Home() {
  return (
    <div className="bg-img">
      <Navbar />
      <h1 className="text-center text-4xl mt-48 text-white font-serif">
      <span className="text-violet-300 text-6xl">Budget Bliss </span>
       <p className="mt-5 text-3xl">simplifies finances with easy tracking,</p> 
       <p className="mt-5 text-2xl">budgeting, and insights.</p></h1>
    </div>
  );
}

export default Home;
