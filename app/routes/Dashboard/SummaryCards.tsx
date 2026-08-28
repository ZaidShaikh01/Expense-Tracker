import SummaryCard from '~/components/Ui/SummaryCard';

type summaryCardsProps = {
  summaryCards: {
    title: string;
    totalAmount: string;
    netChange: string;
    isProfit: boolean;
  }[];
};

const SumamryCards = ({ summaryCards }: summaryCardsProps) => {
  return (
    <div className='flex gap-6 flex-wrap shrink'>
      {summaryCards.map((card) => (
        <SummaryCard
          title={card.title}
          totalAmount={card.totalAmount}
          netChange={card.netChange}
          isProfit={card.isProfit}
        />
      ))}
    </div>
  );
};

export default SumamryCards;
