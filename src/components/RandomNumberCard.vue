<template>
  <div class="random-number-card" @click="toogleTrueFalse()">
    <h2>{{ randomukrnumber.number }}</h2>
    <h3 v-if="isVisible">{{ randomukrnumber.cardinal }}</h3>
    <h4 class="click-to-show-title" v-else>Click to show</h4>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const isVisible = ref(false)

    function toogleTrueFalse() {
      isVisible.value = !isVisible.value
    }

    return { isVisible, toogleTrueFalse }
  },
  props: {
    randomukrnumber: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.random-number-card {
  padding: 20px;
  width: 150px;
  cursor: pointer;
  border: 2px solid #ffd600;
  margin-bottom: 18px;
}
.random-number-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.click-to-show-title {
  color: #ffd600;
}
</style>
