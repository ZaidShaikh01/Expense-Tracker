import Button from '~/components/Button';

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
    </div>
  );
};

export default TransactionPage;
