import type { Route } from './+types/index';
import SumamryCards from './SummaryCards';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Expense Tracker' },
    { name: 'Expense Tracker', content: 'Let us start managing our cashs!' },
  ];
}

export default function Home() {
  // Summary Cards
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
      <SumamryCards summaryCards={summaryCards} />

      {/* Spending Section OverView */}
      {/* Spending Overview Head*/}
      

      {/* Transaction Table */}
    </div>
  );
}
