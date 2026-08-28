import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';

type SummaryCardProps = {
  title: string;
  totalAmount: string;
  gain?: string;
  loss?: string;
};

const SummaryCard = ({ title, totalAmount, gain, loss }: SummaryCardProps) => {
  return (
    <div className='flex p-4 flex-col justify-between bg-white shadow w-65 h-31.25 rounded-2xl '>
      {/* Title */}
      <span className='text-sm text-text'>{title}</span>
      {/* Amound */}
      <span className='text-3xl font-bold'>
        {/* Error will be if string is passed here */}${' '}
        {Number(totalAmount).toLocaleString()}
      </span>
      {/* Gain */}
      {gain && (
        <span className='flex gap-2 items-center text-sm text-success'>
          +₹{Number(gain).toLocaleString()} this month <BsGraphUpArrow />
        </span>
      )}
      {loss && (
        <span className='flex gap-2 items-center text-sm text-danger'>
          -₹{Number(loss).toLocaleString()} this month <BsGraphDownArrow />
        </span>
      )}
    </div>
  );
};

export default SummaryCard;
