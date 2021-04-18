<template>
  <div class="number-card">
    <h1>{{ ukrnumber.number }}</h1>
    <h3>{{ ukrnumber.cardinal }}</h3>
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
@media only screen and (max-width: 600px) {
  .number-card {
    margin-left: auto;
    margin-right: auto;
  }
}
.number-card {
  padding: 20px;
  width: 150px;
  border: 2px solid #cd2e3a;
  margin-bottom: 18px;
}
</style>
