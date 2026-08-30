import type { Route } from './+types/index';
import SumamryCards from './SummaryCards';
import DropdownMenu from '~/components/Ui/SimpleDropDown';
import SpendingSection from './spending_section';

const pieData = [
  { category: 'Food', amount: 12000 },
  { category: 'Transport', amount: 6000 },
  { category: 'Bills', amount: 10000 },
  { category: 'Shopping', amount: 5000 },
  { category: 'Entertainment', amount: 3000 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

const data = [
  { month: 'Jan', income: 50000, expense: 32000 },
  { month: 'Feb', income: 50000, expense: 28000 },
  { month: 'Mar', income: 55000, expense: 35000 },
  { month: 'Apr', income: 50000, expense: 30000 },
  { month: 'May', income: 60000, expense: 38000 },
  { month: 'Jun', income: 60000, expense: 42000 },
];

const tableData = [
  {
    transaction: 'Netflix Subscription',
    category: 'Entertainment',
    date: '1/2/13',
    Amount: '+7860',
  },
  {
    transaction: 'Subscription',
    category: 'Entertainment',
    date: '1/2/13',
    Amount: '+7860',
  },
  {
    transaction: 'Netflix ',
    category: 'Entertainment',
    date: '1/2/13',
    Amount: '+7860',
  },
  {
    transaction: 'youtube Subscription',
    category: 'Entertainment',
    date: '1/2/13',
    Amount: '+7860',
  },
  {
    transaction: 'Netflix insta',
    category: 'Entertainment',
    date: '1/2/13',
    Amount: '+7860',
  },
];

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
    <div className='flex flex-col gap-10 py-10 px-40'>
      {/* Summary Cards Row */}
      <SumamryCards summaryCards={summaryCards} />

      {/* Spending Section OverView */}
      <SpendingSection COLORS={COLORS} data={data} pieData={pieData} />

      {/* Transaction Table */}
      <div className='flex p-4 gap-4 flex-col justify-between bg-white shadow w-2/3  rounded-2xl'>
        {/* Heading */}
        <h1 className='text-2xl font-bold'>Recent Transactions</h1>
        <a href='#' className='text-blue-400 underline'>
          View All
        </a>
        <table>
          <thead className='border-b font-bold border-blue-gray-100 bg-[#F8F9FA]'>
            <tr>
              <td>Transaction</td>
              <td>Category</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody className='bg-white '>
            {tableData.map((row) => (
              <tr className='border-b border-stroke' key={row.transaction}>
                <td>{row.transaction}</td>
                <td>{row.category}</td>
                <td>{row.date}</td>
                <td>{row.Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
