import React, { use } from 'react'
import type { ITechnologies } from '../types/types';
import TechnologyCard from './TechnologyCard';

interface AvailableTechnologyProps {
  technology: Promise<ITechnologies[]>;
  selectedTechnologies: ITechnologies[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<ITechnologies[]>>;
  countSelected: number;
  setCountSelected: React.Dispatch<React.SetStateAction<number>>;
}




const AvailableTechnology = ({ technology, selectedTechnologies, setSelectedTechnologies,countSelected, setCountSelected }: AvailableTechnologyProps) => {
    const technologies = use(technology);
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
        {
            technologies.map((tech: ITechnologies) => (
              <TechnologyCard key={tech.id} technology={Promise.resolve(tech)} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} countSelected={countSelected} setCountSelected={setCountSelected} />
            ))
        }
    </div>
  )
}

export default AvailableTechnology