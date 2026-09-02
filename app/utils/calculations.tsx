import type { MonthlyTransaction } from '~/types/MonthlyTransaction';
import type { Transaction } from '~/types/Transaction';

export const totalIncomeBalance = (transactionList: Transaction[]) => {
  return transactionList.reduce((total, transaction) => {
    if (transaction.type === 'income') {
      return total + transaction.amount;
    }
    return total;
  }, 0);
};

export const totalExpenseBalance = (transactionList: Transaction[]) => {
  return transactionList.reduce((total, transaction) => {
    if (transaction.type === 'expense') {
      return total + transaction.amount;
    }
    return total;
  }, 0);
};
export const savings = (transactionList: Transaction[]) => {
  return transactionList.reduce((total, transaction) => {
    if (transaction.type === 'expense') {
      return total - transaction.amount;
    } else {
      return total + transaction.amount;
    }
  }, 0);
};

export const getYearData = (transactionList: Transaction[]) => {
  const yearlyData: MonthlyTransaction[] = [];
  let group;

  console.log('Before Method', yearlyData);
  transactionList.forEach((transaction) => {
    const monthKey = new Date(transaction.date).getMonth();

   

    // yearlyData[month] = yearlyData[month].push(transaction);
    console.log('In Method', monthKey);
  });

  return yearlyData;
};
