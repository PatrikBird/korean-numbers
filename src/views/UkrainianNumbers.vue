<template>
  <div class="numbers">
    <h1>Ukrainian Numbers</h1>
    <NumberCard
      v-for="ukrnumber in ukrnumbers"
      :key="ukrnumber.number"
      :ukrnumber="ukrnumber"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NumberCard from '../components/NumberCard.vue'
import DataService from '../services/DataService'

export default defineComponent({
  name: 'UkrainianNumbers',
  components: {
    NumberCard,
  },
  data() {
    return {
      ukrnumbers: DataService.getUkrainianNumbers(),
    }
  },
})
</script>

<style scoped>
.numbers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
