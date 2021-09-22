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
      if (this.metacritic >= 75) color = 'green'
      else if (this.metacritic >= 50) color = 'yellow'
      else color = 'red'
      return [
        'absolute',
        'rounded',
        'top-2',
        'left-2',
        'px-2',
        'py-1',
        `bg-${color}-600`,
      ]
    },
  },
}
</script>
