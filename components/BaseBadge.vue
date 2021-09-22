<template>
  <div :class="classBadge">{{ metacritic }}</div>
</template>

<script>
export default {
  props: {
    metacritic: Number,
  },
  computed: {
    classBadge() {
      let color
      if (this.metacritic >= 75) color = 'bg-green-600'
      else if (this.metacritic >= 50) color = 'bg-yellow-600'
      else color = 'bg-red-600'
      return ['absolute', 'rounded', 'top-2', 'left-2', 'px-2', 'py-1', color]
    },
  },
}
</script>
