import React from "react";

const Dashboard = () => {
  return (
    <div className="flex items-center h-1/2 ml-7">
      <div className="w-1/4 mt-52 mx-10">
        <img
          src="/img/cover-photo.jpg"
          className=" object-contain "
          alt="cover photo"
        />
      </div>
      <div>
        <h2 className=" text-4xl font-bold text-black text-center">
          Luminous Suwal
        </h2>
        <h4>
          <span className="text-black">Full Stack Developer</span>
        </h4>
      </div>
    </div>
  );
};

export default Dashboard;
