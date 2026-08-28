import { BsGraphUpArrow } from "react-icons/bs";

const SummaryCard = () => {
  return (
    <div className='flex p-4 flex-col justify-between bg-white shadow w-65 h-31.25 rounded-2xl '>
      {/* Title */}
      <span className='text-sm text-text'>Total Balance</span>
      {/* Amound */}
      <span className='text-3xl font-bold'>$ 45,320</span>
      {/* Gain or Loss */}
      <span className='flex gap-2 items-center text-sm text-success'>
        +₹2,150 this month <BsGraphUpArrow />
      </span>
    </div>
  );
};

export default SummaryCard;
