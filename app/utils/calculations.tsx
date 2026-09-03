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

export const getYearData = (
  transactionList: Transaction[]
): MonthlyTransaction[] => {
  // 1. Temporary boxes for grouping
  const groups: { [key: string]: Transaction[] } = {};

  // 2. Put each transaction into the correct month box
  transactionList.forEach((transaction) => {
    const date = new Date(transaction.date);

    // Example key: "2026-01", "2026-02"
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 01-12
    const monthKey = `${year}-${month}`;

    // If this month box doesn't exist yet, create it
    if (!groups[monthKey]) {
      groups[monthKey] = [];
    }

    // Add transaction into that month
    groups[monthKey].push(transaction);
  });

  // 3. Convert boxes into final array
  const yearlyData: MonthlyTransaction[] = Object.keys(groups).map(
    (monthKey) => ({
      name: monthKey,
      transaction: groups[monthKey],
    })
  );

  // Optional: sort by month
  yearlyData.sort((a, b) => a.name.localeCompare(b.name));

  return yearlyData;
};