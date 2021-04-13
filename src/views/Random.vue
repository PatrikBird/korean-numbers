<template>
  <h1>Exercise: Random Numbers</h1>
  <div class="random">
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
      randomukrnumbers: DataService.getXRandomUkrainianNumbers(20),
    }
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
</style>
