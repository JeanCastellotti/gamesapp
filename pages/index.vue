<template>
  <main class="space-y-6">
    <h2 class="text-3xl font-signika">Les derniers jeux</h2>
    <LoadingSpinner v-if="$fetchState.pending" />
    <div v-else-if="$fetchState.error">Une erreur est survenue :(</div>
    <GamesGrid v-else-if="hasGames" :games="games" />
    <div v-else class="text-center">Aucun jeu</div>
  </main>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('loadGames', 6)
  },
  fetchDelay: 1000,
  computed: {
    games() {
      return this.$store.getters.games
    },
    hasGames() {
      return this.$store.getters.hasGames
    },
  },
}
</script>
