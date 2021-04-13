<template>
  <div>
    <h1>Insert a number and get the name in ukrainian</h1>
    <div>
      <input class="insert" v-model="searchInput" />
      <h1>{{ result }}</h1>
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
  border: 2px solid #098319;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 34px;
  margin: 4px 2px;
  margin-bottom: 25px;
}
</style>
