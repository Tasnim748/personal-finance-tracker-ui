export interface Expense {
    id: number;
    title: string;
    dueDate: string;
    budget: number;
    paid: number;
    due: number;
    category: string;
    categoryRef: number;
    person: string;
    personRef: number;
    complete: boolean;
    planned: boolean;
}