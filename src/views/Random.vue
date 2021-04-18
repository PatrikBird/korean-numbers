<template>
  <h1>Exercise: Random Numbers</h1>
  <button class="yellow" @click="reload">Click to generate new numbers</button>
  <div class="random">
    <RandomNumberCard
      v-for="randomukrnumber in randomukrnumbers"
      :key="index + randomukrnumber.number"
      :randomukrnumber="randomukrnumber"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RandomNumberCard from '../components/RandomNumberCard.vue'
import DataService from '../services/DataService'

export default defineComponent({
  name: 'Random',
  components: {
    RandomNumberCard,
  },
  data() {
    return {
      randomukrnumbers: DataService.get100RandomUkrainianNumbers(),
      index: Math.random().toString(36).substring(7),
    }
  },
  methods: {
    reload() {
      this.randomukrnumbers = DataService.get100RandomUkrainianNumbers()
      this.index = Math.random().toString(36).substring(7)
    },
  },
})
</script>

<style scoped>
.random {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 18px;
  margin-right: 18px;
}

button.yellow {
  touch-action: manipulation;
  background-color: #ffd600;
  border: none;
  color: #2ea2cc;
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin-bottom: 25px;
}
</style>
