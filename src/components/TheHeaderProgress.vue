<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { page_progress } from '@/common/constants.js'
</script>
<template>
  <a :href="`#${page_progress}`" class="text-sm">
    <div v-if="true" class="flex items-center gap-1">
      Day Template
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1">
      <div>Progress : <span class="fonts-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-600"></div>
    </div>
  </a>
</template>
