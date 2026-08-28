import { BsGraphUpArrow } from 'react-icons/bs';
import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Expense Tracker' },
    { name: 'Expense Tracker', content: 'Let us start managing our cashs!' },
  ];
}

export default function Home() {
  return <div className='flex flex-col py-10 px-40'>
    {/* Summary Cards Row */}
    

    {/* Spending Section OverView */}
    {/* Transaction Table */}


  </div>;
}
