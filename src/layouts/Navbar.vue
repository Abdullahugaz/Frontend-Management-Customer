<template>
   
  <header class="bg-pink-600 text-white p-4 shadow-md flex items-center justify-between">
   <img src="/images/yiksi.png" alt="yiksi" class="h-14 w-14 object-contain" />

    <h1 class="text-xl font-bold">Customer Management</h1>

    <div class="flex items-center space-x-4">
      <!-- Search -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="px-3 py-1 rounded-md items-center text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
      />

      <!-- Dark Mode Toggle -->
      <button
        @click="toggleDarkMode"
        class="bg-white text-pink-600 px-3 py-1 rounded-md hover:bg-gray-200 transition"
      >
        {{ isDark ? 'Light' : 'Dark' }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const searchQuery = ref('')
const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>
