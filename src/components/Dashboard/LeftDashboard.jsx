import React from "react";

const LeftDashboard = () => {
  return (
    <div className="w-full py-16 lg:p-0 lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
        Hello<span className="text-[#ff715b]">.</span>
      </h1>

      <div className="flex items-center justify-center lg:justify-start mb-6">
        <div className="h-0.5 w-8 bg-[#ff715b] mr-4"></div>
        <p className="text-white text-2xl sm:text-3xl md:text-4xl cursor-pointer">
          I'm Saurabh Sahu
        </p>
      </div>

      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
        Software Developer
      </h2>

      <div className="flex gap-4 group">
  <button className="bg-[#ff715b] text-xl text-white font-bold px-6 py-2 cursor-pointer transition-all duration-300 
                     group-hover:bg-transparent group-hover:text-[#ff715b] group-hover:border group-hover:border-[#ff715b] 
                     hover:bg-transparent hover:text-[#ff715b] hover:border hover:border-[#ff715b]">
    Got a project?
  </button>
  <button className="border border-[#ff715b] text-xl text-white font-bold px-6 py-2 cursor-pointer transition-all duration-300 
                     group-hover:bg-[#ff715b] group-hover:text-white 
                     hover:bg-[#ff715b] hover:text-white">
    My resume
  </button>
</div>

    </div>
  );
};

export default LeftDashboard;
