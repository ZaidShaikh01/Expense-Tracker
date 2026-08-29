import type { Route } from './+types/index';
import SumamryCards from './SummaryCards';
import DropdownMenu from '~/components/Ui/SimpleDropDown';
import SpendingSection from './spending_section';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', income: 50000, expense: 32000 },
  { month: 'Feb', income: 50000, expense: 28000 },
  { month: 'Mar', income: 55000, expense: 35000 },
  { month: 'Apr', income: 50000, expense: 30000 },
  { month: 'May', income: 60000, expense: 38000 },
  { month: 'Jun', income: 60000, expense: 42000 },
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
    <div className='flex flex-col py-10 px-40'>
      {/* Summary Cards Row */}
      <SumamryCards summaryCards={summaryCards} />

      {/* Spending Section OverView */}
      <SpendingSection />
      {/* LineChart */}
      <div className='w-1/2 h-75'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />

            {/* X axis → Months */}
            <XAxis dataKey='month' />

            {/* Y axis → Numbers */}
            <YAxis />

            <Tooltip />
            <Legend />

            {/* Income line */}
            <Line
              type='monotone'
              dataKey='income'
              name='Income'
              stroke='#22c55e'
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
            />

            {/* Expense line */}
            <Line
              type='monotone'
              dataKey='expense'
              name='Expense'
              stroke='#ef4444'
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Spending Overview Head*/}

      {/* Transaction Table */}
    </div>
  );
}
