"use client";
import { useState } from "react";
import user from "../assets/logo.jpg";
import logo from "../assets/whatbytes_logo.jpeg";
import Image from "next/image";
import { FiBarChart2 } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { BiFileBlank } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const navigate = useRouter();
  const sidebarItems = [
    { title: "Dashboard", icon: <FiBarChart2 size={28} />, path: "/" },
    { title: "Skill Test", icon: <TfiMedallAlt size={28} />, path: "/skilltest" },
    { title: "Internship", icon: <BiFileBlank size={28} />, path: "/internship" },
  ];

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white border-b-2 xl:px-10 fixed w-full z-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-black text-xl font-bold">WhatBytes</h1>
        </div>
        <div
          className="hidden xl:flex items-center gap-2 border-2 border-gray-200 p-2 rounded-lg cursor-pointer"
        >
          <Image
            src={user}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-black font-semibold">Merajul Haque</h1>
        </div>
        <div
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="flex xl:hidden items-center gap-2 border-2 border-gray-200 p-2 rounded-lg cursor-pointer"
        >
          <Image
            src={user}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-black font-semibold">Merajul Haque</h1>
        </div>
      </div>
      {
        isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
            <div className="fixed top-0 left-0 h-screen bg-white border-r-2 transition-all duration-300 z-20 w-72">
              <div className="flex items-center justify-between p-4 border-b-2">
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
                  <h1 className="text-black text-xl font-bold">WhatBytes</h1>
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-black"
                >
                  <h1 className="text-2xl font-semibold">
                    <MdClose />
                  </h1>
                </button>
              </div>
              <div className="block w-full">
                {sidebarItems.map((item) => (
                  <div
                    key={item.title}
                    className={`flex items-center cursor-pointer py-5 mb-1 gap-4 px-4 rounded-r-full ${location === item.path
                      ? "text-blue-700 bg-gray-100"
                      : "text-black hover:text-blue-700 transition-colors duration-300"
                      }`}
                    onClick={() => {
                      navigate.push(item.path)
                      setIsOpen(!isOpen)
                    }}
                  >
                    {item.icon}
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Navbar;
