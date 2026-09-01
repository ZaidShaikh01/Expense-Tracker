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
    return total;
  }, 0);
};
