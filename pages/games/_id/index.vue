<template>
  <div class="space-y-6">
    <LoadingSpinner v-if="$fetchState.pending" />
    <div v-else class="space-y-6">
      <img
        :src="game.background_image"
        alt=""
        class="h-64 w-full object-cover rounded"
      />
      <h1 class="text-4xl font-signika">{{ game.name }}</h1>
      <!-- <video controls>
        <source :src="game.movies[0].data.max" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video> -->
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async fetch() {
    await this.$store.dispatch('loadOneGame', this.$route.params.id)
  },
  fetchDelay: 1000,
  head() {
    return {
      title: this.game.name,
    }
  },
  computed: {
    game() {
      return this.$store.getters.game
    },
  },
}
</script>
