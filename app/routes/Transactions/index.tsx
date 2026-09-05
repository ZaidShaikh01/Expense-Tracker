import Button from '~/components/Button';
import SimpleDropdown from '~/components/Ui/SimpleDropDown';

const TransactionPage = () => {
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
    </div>
  );
};

export default TransactionPage;
