import { Link } from 'react-router';

type TransactionTableProps = {
  tableData: {
    transaction: string;
    amount: number;
    date: string;
    category: string;
  }[];
  handleAdd: () => void;
};

const TransactionTable = ({ tableData, handleAdd }: TransactionTableProps) => {
  return (
    <div className='flex p-4 gap-4 flex-col justify-between bg-white shadow w-2/3  rounded-2xl'>
      {/* Heading */}
      <h1 className='text-2xl font-bold'>Recent Transactions</h1>
      <Link to='/transactions' className='text-blue-400 underline'>
        View All
      </Link>
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
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAdd}>Add element</button>
    </div>
  );
};

export default TransactionTable;
