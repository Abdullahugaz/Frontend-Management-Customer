<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Navbar @toggle-sidebar="showSidebar = !showSidebar" />

    <div class="flex flex-1">
      <!-- Sidebar -->
      <Sidebar v-if="showSidebar || isDesktop" />

      <!-- Main -->
      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

const showSidebar = ref(false)
const isDesktop = ref(false)

const updateViewport = () => {
  isDesktop.value = window.innerWidth >= 768
  if (isDesktop.value) showSidebar.value = true
}

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
})
</script>
