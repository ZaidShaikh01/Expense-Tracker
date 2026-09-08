import Button from '~/components/Button';
import SimpleDropdown from '~/components/Ui/SimpleDropDown';
import TableTransaction from './transactions_table';

const TransactionPage = () => {
  
  const tableData = [
    {
      transaction: 'Netflix Subscription',
      category: 'Entertainment',
      date: '1/2/13',
      amount: '+7860',
    },
    {
      transaction: 'Subscription',
      category: 'Entertainment',
      date: '1/2/13',
      amount: '+7860',
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
      <TableTransaction tableData={tableData} />
    </div>
  );
};

export default TransactionPage;
