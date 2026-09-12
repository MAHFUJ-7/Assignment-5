import React from "react";
import type { ITechnologies } from "../types/types";
import StackCard from "./StackCard";
interface StackProps {
  selectedTechnologies: ITechnologies[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<ITechnologies[]>
  >;
  countSelected: number;
  setCountSelected: React.Dispatch<React.SetStateAction<number>>;
}

const Stack = ({
  selectedTechnologies,
  setSelectedTechnologies,
  countSelected,
  setCountSelected,
}: StackProps) => {
  

  return (
    <div className="p-5 border border-[#E2E8F0] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h1 className=" font-bold text-[#0F172A] mt-3">Your Stack</h1>
      <h4 className="text-[#64748B] mb-5">
        {selectedTechnologies.length===0?"No":selectedTechnologies.length} Technology selected
      </h4>

      <div>
        {selectedTechnologies.length === 0 ? (
          <p className="text-[#64748B] rounded-lg border-2 border-dashed border-[#E2E8F0] p-2 mt-2">Your stack is empty.</p>
        ) : (
          <StackCard
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
            countSelected={countSelected}
            setCountSelected={setCountSelected}
            handleCount={() =>
              setCountSelected((currentCount) => Math.max(0, currentCount - 1))
            }
          />
          
        )}
      </div>
    </div>
  );
};

export default Stack;
