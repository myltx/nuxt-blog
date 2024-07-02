<script setup lang="ts">
import { getIncludedYearPosts } from '@/utils'

const posts = await getIncludedYearPosts('questions')
</script>

<template>
  <sub-nav />

  <post-list :posts="posts" />
</template>
