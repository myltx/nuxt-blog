<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <section class="prose">
    <div>{{ data?.message }}</div>
    <ContentDoc path="me" class="slide-enter-content" />
  </section>
</template>
