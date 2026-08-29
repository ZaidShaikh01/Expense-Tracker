import SimpleDropdown from "~/components/Ui/SimpleDropDown";

const SpendingSection = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Spending Overview</h1>
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
  );
};

export default SpendingSection;
