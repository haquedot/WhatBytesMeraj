import React from "react";
import { MdAutoGraph } from "react-icons/md";
import { useSelector } from "react-redux";
import LineChartComponent from "./LineChart";

function ComparisonGraph() {
  const { percentile } = useSelector((state) => state.score);

  return (
    <div className="bg-white p-5 border-2 border-gray-200 rounded-lg">
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex flex-col justify-center mb-4 sm:mb-0 sm:w-3/5 md:w-full">
          <h1 className="text-xl font-semibold text-black mb-3">Comparison Graph</h1>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">
              You scored {percentile} percentile{" "}
            </span>
            which is higher than the average percentile (72%) of all engineers
            who took this assessment.
          </p>
        </div>

        <div className="md:flex justify-center hidden bg-[#f4f6f8] p-2 rounded-full">
          <MdAutoGraph className="text-4xl text-blue-800" />
        </div>
      </div>

      <div className="px-5 sm:px-10">
        <LineChartComponent userPercentile={percentile} />
      </div>
    </div>
  );
}

export default ComparisonGraph;
