<template>
  <h1>Exercise: Random Numbers</h1>
  <button class="yellow" @click="reload">Click to generate new numbers</button>
  <div class="random">
    <RandomNumberCard
      v-for="kNum in randomKoreanNumbers"
      :key="index + kNum.number"
      :randomKoreanNumber="kNum"
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
      randomKoreanNumbers: DataService.get100RandomUkrainianNumbers(),
      index: Math.random().toString(36).substring(7),
    }
  },
  methods: {
    reload() {
      this.randomKoreanNumbers = DataService.get100RandomUkrainianNumbers()
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
button:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
button.yellow {
  touch-action: manipulation;
  background-color: #cd2e3a;
  border: none;
  color: #000;
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin: 4px 2px 25px;
}
</style>
