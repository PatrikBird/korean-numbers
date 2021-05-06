<template>
  <h1>Korean Numbers</h1>
  <div class="numbers">
    <NumberCard
      v-for="koreanNumber in koreanNumbers"
      :key="koreanNumber.number"
      :koreanNumber="koreanNumber"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NumberCard from '../components/NumberCard.vue'
import { getAllKoreanNumbers } from '@/services/KoreanDataService'

export default defineComponent({
  name: 'KoreanNumbers',
  components: {
    NumberCard,
  },
  data() {
    return {
      koreanNumbers: getAllKoreanNumbers(),
    }
  },
})
</script>

<style scoped>
.numbers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 18px;
  margin-right: 18px;
}
</style>
