<!-- components/content/Card.vue -->
<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: 'Card Content',
  },
  type: {
    type: String,
    default: 'default',
  },
})
const bgColors: {
  [key: string]: string
} = {
  warning: 'bg-yellow-100',
  success: 'bg-green-200',
  error: 'bg-red-200',
  info: 'bg-blue-200',
}
</script>

<template>
  <div class="p-2 border bg-white dark:bg-black dark:border-gray-700 rounded" :class="bgColors[type]">
    {{ content }}
  </div>
</template>
