<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Navbar />

    <div class="flex flex-1">
      <Sidebar />

      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
</script>
