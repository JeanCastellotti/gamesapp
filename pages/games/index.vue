<template>
  <main class="space-y-6">
    <div class="text-3xl font-signika">Tous les jeux</div>
    <LoadingSpinner v-if="$fetchState.pending" />
    <GamesGrid v-else :games="games" />
  </main>
</template>

<script>
export default {
  // async asyncData({ store }) {
  //   await store.dispatch('loadGames', 18)
  // },
  async fetch() {
    await this.$store.dispatch('loadGames', 18)
  },
  fetchDelay: 1000,
  head() {
    return {
      title: 'Tous les jeux',
    }
  },
  computed: {
    games() {
      return this.$store.getters.games
    },
  },
}
</script>
