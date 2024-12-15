import type { Transaction } from "@/models/transaction";

export function saveTransaction(transaction: Transaction): number {
    let transactions = JSON.parse(localStorage.getItem("transactions") || "{}")
    
    let maxIndex = 0;

    Object.keys(transaction).map(key => maxIndex = Math.max(+key, maxIndex));

    transaction.id = maxIndex + 1;

    transactions.push(transaction);

    localStorage.setItem("transactions", JSON.stringify(transactions));

    return transaction.id;
}

export function deleteTransaction(id: number) {
    let transactions = JSON.parse(localStorage.getItem("transactions") || "{}")

    delete transactions[id]
    localStorage.setItem("transactions", JSON.stringify(transactions));


}

export function getTransactions(): Array<Transaction> {
    return JSON.parse(localStorage.getItem("transactions") || "{}")
}

