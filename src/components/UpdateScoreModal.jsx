"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Htmlpng from "../assets/images.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { update } from "@/features/score/scoreSlice";
import { FaArrowRight } from "react-icons/fa6";

const inputData = [
  {
    id: 1,
    key: "rank",
    label: "Rank",
    placeholder: "Enter your Rank",
    message: "Please enter  Rank",
  },
  {
    id: 2,
    key: "percentile",
    label: "Percentile",
    placeholder: "Enter your Percentile",
    message: "Please enter a value between 0 and 100",
  },
  {
    id: 3,
    key: "score",
    label: "Current Score (out of 15)",
    placeholder: "Enter your current score",
    message: "Please enter a value between 0 and 15",
  },
];

export default function UpdateScoreModal({ open, handleOpen, stats }) {
  const [formValues, setFormValues] = useState(stats);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };
  const handleSave = () => {
    const hasEmptyField = Object.values(formValues).some(
      (value) => value === ""
    );
    if (hasEmptyField) {
      setError("All fields are required!");
      return;
    }
    localStorage.setItem("stats", JSON.stringify(formValues));
    dispatch(update(formValues));
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen} className="p-2 md:p-3">
      <div className="flex justify-between items-center px-2">
        <DialogHeader className="text-black">Update Score</DialogHeader>
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src={Htmlpng}
            alt="HTML Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
        </div>
      </div>
      <DialogBody>
        <form className="flex flex-col gap-6">
          {inputData.map((data) => (
            <div
              key={data.id}
              className="block lg:flex justify-between items-center gap-3"
            >
              <label className="flex items-center gap-3 mb-2 lg:mb-0">
                <div className="h-6 w-6 flex items-center justify-center text-xs text-white bg-blue-900 rounded-full ">
                  {data.id}
                </div>
                <p className="text-md font-normal text-black">
                  Update your <span className="font-semibold">{data.label}</span>
                </p>
              </label>
              <div className="flex flex-col">
                <input
                  type="number"
                  placeholder={data.placeholder}
                  value={formValues[data.key]}
                  onChange={(e) => handleChange(data.key, e.target.value)}
                  className={`text-black font-semibold border border-1.5 rounded-md p-2 flex-1 ${formValues[data.key] ? "border-blue-500" : "border-red-500"
                    }`}
                />
                {!formValues[data.key] && (
                  <span className="text-red-500 text-sm mt-1">
                    {data.message}
                  </span>
                )}
              </div>
            </div>
          ))}
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </DialogBody>
      <DialogFooter className="flex justify-end gap-4">
        <Button variant="text" onClick={handleOpen} className="border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-gray-100" >
          Cancel
        </Button>
        <Button className="flex items-center bg-blue-900 text-white group px-6 border-2 border-black" onClick={handleSave}>
          Save <FaArrowRight className="ms-2 group-hover:translate-x-1 transition-all duration-300" />
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
