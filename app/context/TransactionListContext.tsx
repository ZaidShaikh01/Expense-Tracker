import { createContext, useContext, useState, type ReactNode } from 'react';
import { januaryData } from '~/data/demoData';
import type { Transaction } from '~/types/Transaction';

// What the context will give to pages
type TransactionContextType = {
  transactionList: Transaction[];
  addTransaction: (transaction: Transaction) => void;
};

// Create context
const TransactionContext = createContext<TransactionContextType | null>(null);

// Provider component
export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  // Add function
  const addTransaction = (transaction: Transaction) => {
    setTransactionList((prev) => [...prev, transaction]);
  };
  // addTransaction(januaryData);

  return (
    <TransactionContext.Provider
      value={{
        transactionList,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

// Custom hook (easier to use in pages)
export function useTransactions() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error('useTransactions must be used inside TransactionProvider');
  }

  return context;
}
