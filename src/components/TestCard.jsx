"use client";
import { useState } from "react";
import Image from "next/image";
import Htmlpng from "../assets/images.png";
import UpdateScoreModal from "./UpdateScoreModal";

function TestCard({ updateStats, stats }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white py-5 px-3 rounded-lg border-2 border-gray-200">
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <Image
          src={Htmlpng}
          alt="HTML Logo"
          width={64}
          height={64}
          className="rounded-md"
        />
      </div>

      <div className="text-black flex-1 text-center md:text-left">
        <h1 className="text-[16px] font-semibold">
          Hyper Text Markup Language
        </h1>
        <p className="text-[14px] font-medium text-gray-600">
          Questions : 08 | Duration : 15 mins | Submitted on 31 Dec 2024
        </p>
      </div>

      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <button
          className="px-6 py-2 rounded-md bg-blue-900 hover:bg-blue-950 text-white font-bold border-2 border-black"
          onClick={handleOpen}
        >
          Update
        </button>
        <UpdateScoreModal
          open={open}
          handleOpen={handleOpen}
          updateStats={updateStats}
          stats={stats}
        />
      </div>
    </div>
  );
}

export default TestCard;
