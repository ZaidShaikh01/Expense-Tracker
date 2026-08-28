import type { Route } from './+types/index';
import SummaryCard from '~/components/Ui/SummaryCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Expense Tracker' },
    { name: 'Expense Tracker', content: 'Let us start managing our cashs!' },
  ];
}

export default function Home() {
  const summaryCards = [
    {
      title: 'Total Balance',
      totalAmount: '43520',
      netChange: '211233',
      isProfit: false,
    },
    {
      title: 'Total Income',
      totalAmount: '43520',
      netChange: '211233',
      isProfit: true,
    },
    {
      title: 'Total Expenses',
      totalAmount: '43520',
      netChange: '%23',
      isProfit: false,
    },
    {
      title: 'Saving Rates',
      totalAmount: '43520',
      netChange: '%23',
      isProfit: true,
    },
  ];
  return (
    <div className='flex flex-col py-10 px-40'>
      {/* Summary Cards Row */}
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

      {/* Spending Section OverView */}
      {/* Transaction Table */}
    </div>
  );
}
