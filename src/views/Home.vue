<template>
  <div class="numbers">
    <NumberCard
      v-for="number in numbers"
      :key="number.original"
      :number="number"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NumberCard from '../components/NumberCard.vue'
import DataService from '../services/DataService'

export default defineComponent({
  name: 'Home',
  components: {
    NumberCard,
  },
  data() {
    return {
      numbers: DataService.getNumbers(),
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
