<template>
  <div class="inser">
    <h1>Insert a number and get it in ukrainian</h1>
    <div>
      <input v-model="searchInput" />
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
