<template>
    <div class="h-full w-full flex justify-center items-center bg-black flex-col">
        <h1 class="text-5xl bg-transparent mb-8">Insimodus</h1>
        <h2 class="text-3xl italic mb-4">Total amount: {{ totalAmount }}</h2>
        <h3 class="text-2xl  italic">Transaktionen</h3>
        <div class="h-3/4 py-12 w-1/2">
            <div v-for="transaction in transactions" class="p-4 flex justify-between w-full"
                v-bind:key="transaction.id">
                <span class="">{{ transaction.title }}</span>
                <span class="">{{ transaction.positiv ? "+" : "-" }}{{ transaction.amount }}</span>
            </div>
            <div class="mt-4 flex justify-center items-center w-full h-10 border rounded-lg border-dashed cursor-pointer"
                @click="addTransaction">
                <span class=" text-2xl">+</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import type { Transaction } from '@/models/transaction';
import { getTransactions } from '@/service/data';

export default {
    name: "InsimodusDashboard",
    data() {
        return {
            transactions: [] as Transaction[]
        }
    },
    beforeMount() {
        this.transactions = getTransactions();
    },
    computed: {
        totalAmount() {
            let sum = 0;
            this.transactions.map(transaction => sum += transaction.positiv ? transaction.amount : -transaction.amount)

            return sum
        }
    },
    methods: {
        addTransaction() {
            window.location.href = "/add";
        }
    }
}
</script>