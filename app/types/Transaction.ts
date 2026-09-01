import type { Expense } from './Expense';
import type { Income } from './Income';

export type Transaction = {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
};
