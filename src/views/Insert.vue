<template>
  <div>
    <h1>Insert a number and get the name in ukrainian</h1>
    <div>
      <input class="insert" v-model="searchInput" />
      <h1 class="result-text">{{ result }}</h1>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import DataService from '../services/DataService'

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const searchInput = ref(0)
    const result = ref('')

    watch(
      searchInput,
      () => {
        result.value = DataService.getCardinalFromNumber(searchInput.value)
      },
      { immediate: true }
    )
    return { searchInput, result }
  },
}
</script>
<style scoped>
.insert {
  background-color: #2ea2cc;
  border: 2px solid #ffd600;
  padding: 15px;
  width: 300px;
  text-align: center;
  color: #ffd600;
  display: inline-block;
  font-size: 28px;
  margin: 4px 2px;
}
.result-text {
  margin: 40px;
}
</style>
