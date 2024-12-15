import type { Transaction } from "@/models/transaction";

export function saveTransaction(transaction: Transaction): number {
    let transactions = JSON.parse(localStorage.getItem("transactions") || "{}")

    let maxIndex = 0;

    Object.keys(transactions).map(key => {
        if (+key > maxIndex) {
            maxIndex = +key;
        }
    });

    console.log(maxIndex)
    transaction.id = maxIndex + 1;

    transactions[transaction.id.toString()] = transaction;

    localStorage.setItem("transactions", JSON.stringify(transactions));

    return transaction.id;
}

export function deleteTransaction(id: number) {
    let transactions = JSON.parse(localStorage.getItem("transactions") || "{}")

    delete transactions[id]

    localStorage.setItem("transactions", JSON.stringify(transactions));
}

export function getTransactions(): Array<Transaction> {
    return Object.values(JSON.parse(localStorage.getItem("transactions") || "{}"))
}

