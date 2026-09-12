import { ImCross } from 'react-icons/im';
import type { ITechnologies } from '../types/types';
import { toast } from 'react-toastify';

interface StackCardProps {
  selectedTechnologies: ITechnologies[];
  handleCount: (tech: ITechnologies) => void;
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<ITechnologies[]>>;
  countSelected: number;
  setCountSelected: React.Dispatch<React.SetStateAction<number>>;
}

const StackCard = ({ selectedTechnologies, countSelected, setCountSelected, setSelectedTechnologies }: StackCardProps) => {

  const handleAllRemove = () => {
    setSelectedTechnologies([]);
    toast.success(<span className="text-red-500">All technologies removed from stack!</span>,{position:"bottom-right"});
  };

  const handleCount = (tech: ITechnologies) => {
    setCountSelected(countSelected - 1);
    setSelectedTechnologies(
      selectedTechnologies.filter((t) => t.id !== tech.id),
    );
    toast.success(`${tech.name} removed from stack!`, {position:"bottom-right" });
  };

  return (
    <div>
        {selectedTechnologies.map((tech: ITechnologies) => (
        <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4 flex-wrap" key={tech.id}>
          <div className="flex items-center gap-4 ">
            <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
            <div>
              <h1 className="text-lg font-bold text-[#0F172A]">{tech.name}</h1>
              <p className="text-[#64748B]">{tech.category}</p>
            </div>
          </div>
            <button onClick={()=>handleCount(tech)} ><ImCross /></button>
        </div>
      ))}

      <button onClick={handleAllRemove} className="text-red-500 w-full text-center border border-red-600 rounded-lg  p-3"> Remove All</button>
    </div>
  )
}

export default StackCard