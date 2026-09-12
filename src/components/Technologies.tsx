import React, { useState } from "react";
import type { ITechnologies } from "../types/types";
import Stack from "../../../temp/Stack";
import AvailableTechnology from "./AvailableTechnology";

const fetchTechnologies = async (): Promise<ITechnologies[]> => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

function Technologies() {
  const [techPromise] = useState(() => fetchTechnologies());

  const [countSelected, setCountSelected] = useState(0);

  const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnologies[]>([]);

  console.log(techPromise + "Technologies");
  return (
    <div className="container mx-auto p-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold container mx-auto">
          Explore the{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EC4899] to-[#8B5CF6]">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10 ">
        <div className="col-span-3 md:col-span-2 lg:col-span-3">
          <React.Suspense fallback={<div>Loading...</div>}>
            <AvailableTechnology  technology={techPromise} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} countSelected={countSelected} setCountSelected={setCountSelected} />
          </React.Suspense>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Stack selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} countSelected={countSelected} setCountSelected={setCountSelected} />
          </React.Suspense> 
        </div>
      </div>
    </div>
  );
}

export default Technologies;
