import React from "react";
import Profile from "../../assets/profile.png";

function RightDashboard() {
  return (
    <div className="px-6 sm:px-0 pt-10 sm:pt-20 md:pt-24 lg:pt-30 flex items-center justify-center w-full lg:w-1/2">
      <div className="relative">
        <div className="absolute -top-10 -left-10 text-[#ff715b] text-6xl sm:text-8xl opacity-20">
          &lt;
        </div>
        <div className="absolute -bottom-10 -right-10 text-[#ff715b] text-6xl sm:text-8xl opacity-20">
          &lt;
        </div>
        <div className="rounded-full border-8 sm:border-16 border-[#ff715b] p-1 flex items-center justify-center">
          <img
            src={Profile}
            alt="Profile"
            className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default RightDashboard;
