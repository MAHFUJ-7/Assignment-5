import React, { use } from "react";
import type { ITechnologies } from "../types/types";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: Promise<ITechnologies>;
  selectedTechnologies: ITechnologies[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<ITechnologies[]>
  >;
  countSelected: number;
  setCountSelected: React.Dispatch<React.SetStateAction<number>>;
}

const TechnologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
  countSelected,
  setCountSelected,
}: TechnologyCardProps) => {
  const technologies = use(technology);
  const isSelected = selectedTechnologies.some((t) => t.id === technologies.id);

  const handleAddToStack = (tech: ITechnologies) => {
    setCountSelected(countSelected + 1);
    toast.success(`${tech.name} added to stack!`);
    setSelectedTechnologies([...selectedTechnologies, tech]);
  };

  return (
    <div className="container mx-auto">
      <div
        key={technologies.id}
        className="flex flex-col h-full mb-8 p-5 border border-[#E2E8F0] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center gap-2 justify-between">
          <img
            src={technologies.icon}
            alt={technologies.name}
            className="h-10 w-10"
          />
          <h1
            style={{
              color: technologies.color,
              backgroundColor: `${technologies.color}33`,
              border: `1px solid ${technologies.color}CC`,
            }}
            className=" p-2 m-0.5 rounded-full"
          >
            {technologies.badge}
          </h1>
        </div>
        <h1 className="text-lg font-bold text-[#0F172A]">
          {technologies.name}
        </h1>
        <p className="text-[#64748B]">{technologies.description}</p>

        <div className="flex items-center flex-wrap gap-2 justify-between mt-10 mb-5 p-1">
          <p>{technologies.category}</p>
          <p>{technologies.difficulty}</p>
          <p className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {technologies.rating}
          </p>
        </div>
        <button
          onClick={() => handleAddToStack(technologies)}
          className={`p-2 rounded-lg w-full mt-auto text-white ${
            isSelected
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#0A0F1D] hover:bg-[#151b2d]"
          }`}
          disabled={isSelected}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
