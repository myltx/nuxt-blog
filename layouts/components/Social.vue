<script setup lang="ts">
import { siteConfig, socialLinks } from "@/site.config";
</script>

<template>
  <div class="hidden xl:flex fixed z-1 bottom-[2em] items-end">
    <div
      class="px-[2em] flex justify-end flex-col gap-[1em] border-r-2 h-[60%]">
      <div v-for="link in socialLinks" :key="link.title" class="relative group">
        <a
          v-if="!link.qr"
          :title="link.title"
          :href="link.path"
          class="hover"
          target="_blank">
          <div :class="link.icon" />
        </a>

        <!-- 如果有二维码 -->
        <div v-else class="hover cursor-pointer">
          <div :class="link.icon" />

          <!-- 二维码弹出 -->
          <div
            class="absolute left-full ml-2 top-1/2 -translate-y-1/2 hidden group-hover:block">
            <img
              :src="link.qr"
              alt="微信二维码"
              class="w-32 h-32 rounded shadow-lg" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="text-7xl pointer-events-none op-10 text-end leading-[2em] select-none font-hand"
      style="writing-mode: vertical-rl">
      {{ siteConfig.author }}
    </div>
  </div>
</template>
