<template>
  <div class="number-card">
    <h1>{{ ukrnumber.number }}</h1>
    <h2>{{ ukrnumber.cardinal }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    ukrnumber: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.number-card {
  padding: 20px;
  width: 150px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
