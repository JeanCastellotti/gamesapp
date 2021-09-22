<template>
  <div class="space-y-6">
    <h1 class="text-4xl font-signika">
      Les résultats pour '{{ searchInput }}'
    </h1>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="result in searchResults"
        :key="result.id"
        class="
          bg-gray-900
          rounded
          transition
          transform
          cursor-pointer
          hover:scale-105
          relative
        "
      >
        <div class="p-4">
          <p class="text-lg">{{ result.name }}</p>
          <p class="text-gray-400">
            {{
              new Date(result.released).toLocaleString('fr-FR', {
                month: 'long',
                year: 'numeric',
              })
            }}
          </p>
        </div>
        <NuxtLink
          :to="`/games/${result.id}`"
          class="absolute inset-0"
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    searchInput() {
      return this.$store.getters.searchInput
    },
    searchResults() {
      return this.$store.getters.searchResults
    },
    hasSearchResults() {
      return this.$store.getters.hasSearchResults
    },
  },
}
</script>
