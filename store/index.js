const API = 'https://api.rawg.io/api/games'
const API_KEY = '68fbe27689354ffb9f66a8aa9021edeb'

// STATE
export const state = () => {
  return {
    games: [],
    game: [],
    searchInput: '',
    searchResults: [],
  }
}

// GETTERS
export const getters = {
  games(state) {
    return state.games
  },
  hasGames(state) {
    return Boolean(state.games.length)
  },
  game(state) {
    return state.game
  },
  searchInput(state) {
    return state.searchInput
  },
  searchResults(state) {
    return state.searchResults
  },
  hasSearchResults(state) {
    return Boolean(state.searchResults.length)
  },
}

// MUTATIONS
export const mutations = {
  updateGames(state, payload) {
    state.games = payload
  },
  updateGame(state, payload) {
    state.game = payload
  },
  updateSearchInput(state, payload) {
    state.searchInput = payload
  },
  updateSearchResults(state, payload) {
    state.searchResults = payload
  },
}

// ACTIONS
export const actions = {
  async loadGames(context, numGames) {
    const data = await this.$axios.$get(
      `${API}?page_size=${numGames}&key=${API_KEY}`
    )
    context.commit('updateGames', data.results)
  },
  async loadOneGame(context, numGames) {
    const data = await this.$axios.$get(`${API}/${numGames}?key=${API_KEY}`)
    const movies = await this.$axios.$get(
      `${API}/${data.id}/movies?key=${API_KEY}`
    )
    data.movies = movies.results
    context.commit('updateGame', data)
  },
  async search(context, searchInput) {
    const data = await this.$axios.$get(
      `${API}?key=${API_KEY}&search=${searchInput}`
    )
    context.commit('updateSearchResults', data.results)
    context.commit('updateSearchInput', searchInput)
  },
}
