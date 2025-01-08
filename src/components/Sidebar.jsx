"use client";
import { TfiMedallAlt } from "react-icons/tfi";
import { FiBarChart2 } from "react-icons/fi";
import { BiFileBlank } from "react-icons/bi";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Sidebar() {
  const location = usePathname();
  const navigate = useRouter();

  const sidebarItems = [
    { title: "Dashboard", icon: <FiBarChart2 size={28} />, path: "/" },
    { title: "Skill Test", icon: <TfiMedallAlt size={28} />, path: "/skilltest" },
    { title: "Internship", icon: <BiFileBlank size={28} />, path: "/internship" },
  ];

  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-screen bg-white border-r-2 transition-all duration-300 z-20 w-[280px] hidden xl:flex xl:static xl:z-0`}
      >

        <div
          className={`xl:pt-36 pr-5 block w-full`}
        >
          {sidebarItems.map((item) => (
            <div
              key={item.title}
              className={`flex items-center cursor-pointer py-5 mb-1 gap-4 px-4 rounded-r-full ${location === item.path
                ? "text-blue-700 bg-gray-100"
                : "text-black hover:text-blue-700 transition-colors duration-300"
                }`}
              onClick={() => navigate.push(item.path)}
            >
              {item.icon}
              <h1 className="text-lg font-semibold">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
