import type { Expense } from "./Expense"
import type { Income } from "./Income"

export type Transaction ={
    id: number,
    name: string,
    category: string,
    date: string,
    amount: number,
    type: Income | Expense
}