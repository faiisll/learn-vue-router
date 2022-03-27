<template>
  <div v-if="job">
    <h1>Jobs Detail Page</h1>
    <p>{{ job.id }} - {{ job.title }}</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
  props: ["id"],
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err));
  },
  data() {
    return {
      job: null,
      // id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
