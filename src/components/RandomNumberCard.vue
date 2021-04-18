<template>
  <div class="random-number-card" @click="toggleVisibility">
    <h2>{{ randomKoreanNumber.number }}</h2>
    <h3 v-if="isVisible">{{ randomKoreanNumber.cardinal }}</h3>
    <h4 class="click-to-show-title" v-else>Click to show name</h4>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const isVisible = ref(false)

    function toggleVisibility() {
      isVisible.value = !isVisible.value
    }

    return { isVisible, toggleVisibility }
  },
  props: {
    randomKoreanNumber: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .random-number-card {
    margin-left: auto;
    margin-right: auto;
  }
}
.random-number-card {
  padding: 20px;
  width: 150px;
  cursor: pointer;
  border: 2px solid #cd2e3a;
  margin-bottom: 18px;
}
.random-number-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.click-to-show-title {
  color: #000;
}
</style>
