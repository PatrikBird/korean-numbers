<template>
  <div>
    <h1>Insert a number and get the name in korean</h1>
    <div>
      <input
        type="number"
        placeholder="0"
        class="insert"
        v-model="searchInput"
      />
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
  background-color: #cd2e3a;
  border: 2px solid #000;
  padding: 15px;
  width: 300px;
  text-align: center;
  color: #000;
  display: inline-block;
  font-size: 28px;
  margin: 4px 2px;
}
.result-text {
  margin: 40px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
