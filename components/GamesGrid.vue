<template>
  <div class="grid grid-cols-3 gap-4 pb-6">
    <div
      v-for="game in games"
      :key="game.id"
      class="
        bg-gray-900
        rounded
        overflow-hidden
        transition
        transform
        cursor-pointer
        hover:scale-105
        relative
      "
    >
      <BaseBadge v-if="game.metacritic" :metacritic="game.metacritic" />
      <img
        :src="game.background_image"
        alt=""
        class="w-full h-24 object-cover"
      />
      <div class="p-4">
        <p class="text-lg">{{ game.name }}</p>
        <p class="text-gray-400">
          {{
            new Date(game.released).toLocaleString('fr-FR', {
              month: 'long',
              year: 'numeric',
            })
          }}
        </p>
      </div>
      <NuxtLink :to="`/games/${game.id}`" class="absolute inset-0"></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    games: Array,
  },
}
</script>
