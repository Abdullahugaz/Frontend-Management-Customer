<template>
  <header class="bg-pink-600 text-white p-4 shadow-md">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <!-- Left: Logo + Title -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/images/yiksi.png" alt="logo" class="h-10 w-10 object-contain" />
          <h1 class="text-xl font-bold">Customer Management</h1>
        </div>

        <!-- Hamburger (mobile only) -->
        <button
          class="md:hidden text-white"
          @click="$emit('toggle-sidebar')"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Right: Search + Dark Toggle -->
      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="px-3 py-1 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button
          @click="toggleDarkMode"
          class="bg-white text-pink-600 px-3 py-1 rounded-md hover:bg-gray-200 transition"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>
      </div>
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
  root.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>
