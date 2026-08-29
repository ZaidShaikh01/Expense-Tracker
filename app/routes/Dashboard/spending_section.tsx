import SimpleDropdown from '~/components/Ui/SimpleDropDown';
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

type SpendingSectionProps = {
  data: {
    month: string;
    income: number;
    expense: number;
  }[];
  pieData: {
    category: string;
    amount: number;
  }[];
  COLORS: string[];
};

const SpendingSection = ({ data, pieData, COLORS }: SpendingSectionProps) => {
  return (
    <div>
      {/* Heading */}
      <div>
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
              <span className='text-sm text-gray-400'>
                This month's spending by category
              </span>
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
      </div>
    </div>
  );
};

export default SpendingSection;
