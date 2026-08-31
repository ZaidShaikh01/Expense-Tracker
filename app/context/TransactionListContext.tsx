import { createContext, useState } from 'react';
import {
  aprilData,
  febData,
  januaryData,
  marchData,
  mayData,
} from '~/data/demoData';
import type { Transaction } from '~/types/Transaction';

const [transactionList, setTransactionList] = useState<Transaction[]>([]);

export const totalTransactionContext = createContext(setTransactionList);

// Add Transaction

export const addTransaction = (transaction: Transaction) => {
  setTransactionList((prev) => [...(prev ?? []), transaction]);
};

// Remove Transaction

// Total Transaciton
