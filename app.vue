<template>
  <div>Hello, world! <button>Demo!</button></div>
</template>

<script setup>
const demo = async () => {
  const { data } = await useFetch('/api/cached');
};
</script>
