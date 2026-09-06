import { Link } from 'react-router';
import Button from '~/components/Button';
import SimpleDropdown from '~/components/Ui/SimpleDropDown';

const TransactionPage = () => {
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
      amount: '+7860',
    },
    {
      transaction: 'youtube Subscription',
      category: 'Entertainment',
      date: '1/2/13',
      amount: '+7860',
    },
    {
      transaction: 'Netflix insta',
      category: 'Entertainment',
      date: '1/2/13',
      amount: '+7860',
    },
  ];
  return (
    <div>
      {/* Heading */}
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>Transactions</h1>
        <Button
          text='+ Add Transactions'
          buttonClassName='px-1'
          textClassName='text-xs'
        />
      </div>
      {/* This is dropdown boxes */}
      <div className='flex'>
        <SimpleDropdown
          items={[
            'January',
            'Feburary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
        />
        <SimpleDropdown
          items={[
            'January',
            'Feburary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
        />
        <SimpleDropdown
          items={[
            'January',
            'Feburary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
        />
        <SimpleDropdown
          items={[
            'January',
            'Feburary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
        />
      </div>
      {/* Table */}
      <div className='flex gap-4 flex-col justify-between bg-white shadow w-full rounded-2xl  '>
        <table className='m-2'>
          <thead className=' rounded-2xl font-bold  bg-[#E6E6E6]'>
            <tr>
              <th className='px-4 py-2 '>Date</th>
              <th className='px-4 py-2 '>Category</th>
              <th className='px-4 py-2 '>Description</th>
              <th className='px-4 py-2 '>Amount</th>
              <th className='px-4 py-2 '>Type</th>
              <th className='px-4 py-2 '>Action</th>
            </tr>
          </thead>
          <tbody className='bg-white text-center '>
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
        {/* <button onClick={handleAdd}>Add element</button> */}
      </div>
    </div>
  );
};

export default TransactionPage;
