import React, { ReactNode } from "react";

const DashboardCard: React.FC<{
  heading: string;
  value: number;
  className?: string;
  children: ReactNode;
}> = (props) => {
  return (
    <div
      className={`bg-gradient-to-r from-[#E0EAFD] to-[#4e7bbe] p-5 lg:w-3/12 md:w-2/5 flex justify-between w-full h-36 bg-gradient-to-r() relative m-2 rounded shadow-md ${
        props.className || ""
      }`}
    >
      <p className="font-bold text-lg">
        {props.heading} <br /> {props.value}
      </p>

      <i className="flex justify-center items-center h-10 w-10 rounded-full bg-gray-50">
        {props.children}
      </i>
    </div>
  );
};

export default DashboardCard;
