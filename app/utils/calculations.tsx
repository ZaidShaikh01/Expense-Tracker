import type { Transaction } from '~/types/Transaction';

export const totalBalance = (transactionList: Transaction[]) => {
  return transactionList.reduce((total, transaction) => {
    if (transaction.type === 'income') {
      return total + transaction.amount;
    }
    return total;
  }, 0);
};
