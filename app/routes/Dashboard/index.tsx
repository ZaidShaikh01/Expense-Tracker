import type { Route } from './+types/index';
import SumamryCards from './SummaryCards';
import DropdownMenu from '~/components/Ui/SimpleDropDown';
import SpendingSection from './spending_section';
import { useTransactions } from '~/context/TransactionListContext';
import TransactionTable from './transaction_table';

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
  const { transactionList, addTransaction } = useTransactions();

  const tableData = transactionList.map((element) => ({
    transaction: element.name,
    amount: element.amount,
    date: element.date,
    category: element.category,
  }));

  // Example: add a fake transaction
  const handleAdd = () => {
    addTransaction({
      id: crypto.randomUUID(),
      name: 'adsf',
      amount: 250,
      category: 'Food',
      date: new Date().toISOString(),
      type: 'expense',
    });
  };

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
      <TransactionTable handleAdd={handleAdd} tableData={tableData} />
    </div>
  );
}
