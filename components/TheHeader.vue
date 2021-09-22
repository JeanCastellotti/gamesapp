<template>
  <header class="bg-gray-900 py-4 mb-6">
    <div class="container flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <span class="text-2xl font-bold text-gray-200 font-asap">GamesApp</span>
      </div>
      <nav class="flex items-center text-gray-400 font-signika space-x-4">
        <NuxtLink to="/" class="hover:text-gray-300">Accueil</NuxtLink>
        <NuxtLink to="/games" class="hover:text-gray-300">Jeux</NuxtLink>
      </nav>
    </div>
  </header>
</template>
