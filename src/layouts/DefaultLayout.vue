<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">Customer Management</h1>
      <nav class="mt-2">
        <router-link class="mr-4" to="/">Dashboard</router-link>
        <router-link to="/customers">Customers</router-link>
      </nav>
    </header>

    <main class="p-6">
      <slot />
    </main>
  </div>
</template>
