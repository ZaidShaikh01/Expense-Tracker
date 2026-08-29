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
  PieChart,
  Pie,
  Cell,
} from 'recharts';

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
      <div className='flex gap-20'>
        {/* LineChart */}
        <div className='flex flex-col p-5 gap-2 w-1/2 h-75 bg-white shadow rounded-2xl'>
          {/* Chart heading */}
          <div className='flex justify-between items-center'>
            <span className='font-bold text-lg'>Income Vs Expense</span>
            <span className='text-sm text-gray-400'>Monthly Trend</span>
          </div>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />

              {/* X axis → Months */}
              <XAxis dataKey='month' />

              {/* Y axis → Numbers are automatically generated depending upon the data */}
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

        {/* Pie Chart here */}
        <div className='flex flex-col p-5 gap-2 w-1/2 h-75 bg-white shadow rounded-2xl'>
        {/* Chart heading */}
          <div className='flex flex-col  items-start'>
            <span className='font-bold text-lg'>Expense Breakdown</span>
            <span className='text-sm text-gray-400'>This month's spending by category</span>
          </div>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={pieData}
                dataKey='amount'
                nameKey='category'
                cx='50%'
                cy='50%'
                outerRadius='70%'
                fill='#8884d8'
                label
                isAnimationActive={true}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={entry.category}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Spending Overview Head*/}

      {/* Transaction Table */}
    </div>
  );
}
