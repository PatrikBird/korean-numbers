<template>
  <div class="random">
    <h1>Exercise: Random Numbers</h1>
    <RandomNumberCard
      v-for="randomukrnumber in randomukrnumbers"
      :key="'r' + randomukrnumber.number"
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
      randomukrnumbers: DataService.getRandomUkrainianNumbers(),
    }
  },
})
</script>

<style scoped>
.random {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
