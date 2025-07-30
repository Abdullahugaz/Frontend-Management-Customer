<script>
export default {
  name: 'CustomerList',
}
</script>

<template>
  <DefaultLayout>
    <h2 class="text-2xl font-bold mb-4">Customers</h2>

    <!-- Add Customer Form -->
    <form @submit.prevent="addCustomer" class="mb-6 space-y-2 bg-white p-4 rounded shadow">
      <div class="flex space-x-4">
        <input v-model="form.name" type="text" placeholder="Name" class="input" required />
        <input v-model="form.email" type="email" placeholder="Email" class="input" required />
        <input v-model="form.phone" type="text" placeholder="Phone" class="input" required />
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
      </div>
    </form>

    <!-- Customer Table -->
    <div class="bg-white p-4 rounded shadow">
      <table class="w-full text-left table-auto">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-2">ID</th>
            <th class="p-2">Name</th>
            <th class="p-2">Email</th>
            <th class="p-2">Phone</th>
            <th class="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td class="p-2">{{ customer.id }}</td>
            <td class="p-2">{{ customer.name }}</td>
            <td class="p-2">{{ customer.email }}</td>
            <td class="p-2">{{ customer.phone }}</td>
            <td class="p-2">
              <button @click="deleteCustomer(customer.id)" class="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '../services/api.js'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const customers = ref([])
const form = ref({ name: '', email: '', phone: '' })

// Fetch all customers
const fetchCustomers = async () => {
  try {
    const response = await api.get('/customers')
    customers.value = response.data
  } catch (err) {
    console.error('Error fetching customers:', err)
  }
}

// Add new customer
const addCustomer = async () => {
  try {
    await api.post('/customers', form.value)
    form.value = { name: '', email: '', phone: '' }
    fetchCustomers()
  } catch (err) {
    console.error('Error adding customer:', err)
  }
}

// Delete customer
const deleteCustomer = async (id) => {
  try {
    await api.delete(`/customers/${id}`)
    fetchCustomers()
  } catch (err) {
    console.error('Error deleting customer:', err)
  }
}

// Load on page mount
onMounted(() => {
  fetchCustomers()
})
</script>

<style scoped>
.input {
  @apply border px-3 py-2 rounded w-full;
}
</style>
