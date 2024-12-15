<template>
    <div class="h-full w-full flex justify-center items-center bg-[#141e36] flex-col">
        <h1 class="text-5xl bg-transparent text-white mb-8">Dashboard</h1>
        <h2 class="text-3xl text-white italic mb-4">Total amount: {{ totalAmount }}</h2>
        <h3 class="text-2xl text-white italic">Transaktonen</h3>
        <div class="h-3/4 py-12 w-1/2">
            <div v-for="transaction in transactions" class="p-4 flex justify-between w-full">
                <span class="text-white">{{ transaction.title }}</span>
                <span class="text-white">{{ transaction.positiv ? "+" : "-" }}{{ transaction.amount }}</span>
            </div>
            <div class="mt-4 flex justify-center items-center w-full h-10 border rounded-lg border-dashed cursor-pointer" @click="addTransaction">
                <span class="text-white text-2xl">+</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import type { Transaction } from '@/models/transaction';
import { getTransactions, saveTransaction } from '@/service/data';

export default {
    name: "Dashboard",
    data(){
        return {
            transactions: [] as Transaction[]
        }
    },
    beforeMount() {
        this.transactions = getTransactions();
    },
    computed: {
        totalAmount(){
            let sum = 0;
            this.transactions.map(transaction => sum += transaction.positiv ? transaction.amount : -transaction.amount)

            return sum
        }
    },
    methods: {
        addTransaction(){
            window.location.href = "/add";
        }
    }
}
</script>