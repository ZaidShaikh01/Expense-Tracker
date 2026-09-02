import type { Transaction } from './Transaction';

export type MonthlyTransaction = {
  name: string;
  transaction: Transaction[];
  totalIncome?: number;
  totalExpense?: number;
};
