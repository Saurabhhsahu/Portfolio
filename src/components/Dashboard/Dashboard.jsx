import React from "react";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";

function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <LeftDashboard />
      <RightDashboard />
    </div>
  );
}

export default Dashboard;
