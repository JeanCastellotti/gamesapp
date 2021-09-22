<template>
  <form class="relative" @submit.prevent="search">
    <input
      v-model.lazy="searchInput"
      type="text"
      class="
        rounded
        bg-gray-200
        w-full
        p-4
        focus:outline-none focus:ring focus:ring-gray-100 focus:ring-opacity-60
        text-gray-800
      "
      placeholder="Search"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="
        h-6
        w-6
        absolute
        right-4
        top-1/2
        transform
        -translate-y-1/2
        text-gray-800
      "
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clip-rule="evenodd"
      />
    </svg>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    }
  },
  computed: {
    searchResults() {
      return this.$store.getters.searchResults
    },
    hasSearchResults() {
      return this.$store.getters.hasSearchResults
    },
  },
  methods: {
    async search() {
      await this.$store.dispatch('search', this.searchInput)
      this.searchInput = ''
      if (this.$route.path !== '/search') this.$router.replace('/search')
    },
  },
}
</script>
