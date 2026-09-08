type TableDataProps = {
  tableData: {
    transaction: string;
    category: string;
    date: string;
    amount: string;
  }[];
};

const TableTransaction = ({ tableData }: TableDataProps) => {
  return (
    <div className='flex flex-col justify-between h-full w-full '>
      <table className='border-separate shadow  border-spacing-0 rounded-lg overflow-hidden border border-gray-300'>
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
            <tr className='border-b  border-stroke' key={row.transaction}>
              <td className='px-4 py-3'>{row.transaction}</td>
              <td className='px-4 py-3'>{row.category}</td>
              <td className='px-4 py-3'>{row.date}</td>
              <td className='px-4 py-3'>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;
