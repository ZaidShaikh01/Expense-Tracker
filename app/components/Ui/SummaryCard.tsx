import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';

type SummaryCardProps = {
  title: string;
  totalAmount: Number;
  netChange: string;
  isProfit: boolean;
};

const SummaryCard = ({
  title,
  totalAmount,
  netChange,
  isProfit,
}: SummaryCardProps) => {
  return (
    <div className='flex p-4 flex-col justify-between hover:scale-95 cursor-pointer  transition duration-600 ease-in-out bg-white shadow w-65 h-31.25 rounded-2xl '>
      {/* Title */}
      <span className='text-sm text-text'>{title}</span>
      {/* Amound */}
      <span className='text-3xl font-bold'>
        {/* Error will be if string is passed here */}${' '}
        {Number(totalAmount).toLocaleString()}
      </span>
      {/* Gain */}

      {
        // Here I will check if Im passing either number or the percentage variable depending upon that I will showcase it
        isProfit ? (
          <span className='flex gap-2 items-center text-sm text-success'>
            +
            {isNaN(Number(netChange))
              ? netChange
              : '$' + Number(netChange).toLocaleString()}{' '}
            this month <BsGraphUpArrow />
          </span>
        ) : (
          <span className='flex gap-2 items-center text-sm text-danger'>
            -
            {isNaN(Number(netChange))
              ? netChange
              : '$' + Number(netChange).toLocaleString()}{' '}
            this month <BsGraphDownArrow />
          </span>
        )
      }
    </div>
  );
};

export default SummaryCard;
