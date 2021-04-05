<template>
  <div class="random-number-card">
    <h1>{{ randomukrnumber.number }}</h1>
    <h2>{{ randomukrnumber.cardinal }}</h2>
  </div>
</template>

<script>
export default {
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
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.random-number-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
