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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sidebarItems = [
    { title: "Dashboard", icon: <FiBarChart2 size={28} />, path: "/" },
    { title: "Skill Test", icon: <TfiMedallAlt size={28} />, path: "/skilltest" },
    { title: "Internship", icon: <BiFileBlank size={28} />, path: "/internship" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Mobile view if less than 768px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const closeSidebar = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <div>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-screen bg-white border-r-2 transition-all duration-300 z-20 ${
          isOpen ? "w-[250px]" : "w-0"
        } sm:w-[280px] sm:static sm:z-0`}
      >
        {isOpen && isMobile && (
          <div className="sm:hidden p-4 text-black">
            <IoClose
              size={30}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>
        )}

        <div
          className={`md:pt-36 pr-5 ${isOpen ? "block" : "hidden"} sm:block`}
        >
          {sidebarItems.map((item) => (
            <div
              key={item.title}
              className={`flex items-center cursor-pointer py-5 mb-1 gap-4 px-4 ${
                location === item.path
                  ? "text-blue-700 bg-gray-100 rounded-r-full"
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

      {!isOpen && isMobile && (
        <div className="sm:hidden opacity-0 p-4 fixed top-1 left-6 z-20">
          <HiMenu
            size={30}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
