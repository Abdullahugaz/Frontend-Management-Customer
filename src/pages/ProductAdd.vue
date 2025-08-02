<!-- eslint-disable vue/multi-word-component-names -->

<script>
export default {
  name: 'ProductAdd', // ✅ This resolves the error
}


</script>

<template>
  <DefaultLayout>
    <h2 class="text-2xl font-bold mb-4">Products</h2>

    <!-- Add Product Form -->
    <form @submit.prevent="submitForm" class="mb-6 space-y-2 bg-white p-2 rounded shadow">
      <div class="flex space-x-2">
        <input v-model="form.name" type="text" placeholder="Name" class="input" required />
        <input v-model="form.description" type="text" placeholder="Description" class="input" />
        <input v-model.number="form.price" type="number" placeholder="Price" class="input" required />
        <button class="bg-blue-600 text-white px-8 py-0.5 rounded hover:bg-blue-400">
          {{ form.id ? 'Update' : 'Add' }}
        </button>
      </div>
    </form>

    <!-- Product Table -->
    <div class="bg-white p-4 rounded shadow">
      <table class="w-full text-left table-auto">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-2">ID</th>
            <th class="p-2">Name</th>
            <th class="p-2">Description</th>
            <th class="p-2">Price</th>
            <th class="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="p-2">{{ product.id }}</td>
            <td class="p-2">{{ product.name }}</td>
            <td class="p-2">{{ product.description }}</td>
            <td class="p-2">${{ parseFloat(product.price).toFixed(2) }}</td>
            <td class="p-2 space-x-2">
              <button @click="editProduct(product)" class="text-blue-500 hover:underline">Edit</button>
              <button @click="deleteProduct(product.id)" class="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios/api.js'
import DefaultLayout from '../layouts/Layout.vue'

const products = ref([])
const form = ref({ name: '', description: '', price: '', id: null })

// Fetch all products
const fetchProducts = async () => {
  try {
    const res = await api.get('/products')
    products.value = res.data
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

// Add or update
const submitForm = async () => {
  try {
    if (form.value.id) {
      await api.put(`/products/${form.value.id}`, form.value)
    } else {
      await api.post('/products', form.value)
    }
    resetForm()
    fetchProducts()
  } catch (err) {
    console.error('Submit error:', err)
  }
}

// Edit handler
const editProduct = (product) => {
  form.value = { ...product }
}

// Delete handler
const deleteProduct = async (id) => {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      await api.delete(`/products/${id}`)
      fetchProducts()
    } catch (err) {
      console.error('Delete error:', err)
    }
  }
}

// Reset form
const resetForm = () => {
  form.value = { name: '', description: '', price: '', id: null }
}

onMounted(() => {
  fetchProducts()
})
</script>

<style scoped>
.input {
  @apply border px-3 py-2 rounded w-full;
}
</style>
