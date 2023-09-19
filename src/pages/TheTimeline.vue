<script setup>
import { generateTimelineItems } from '@/common/functions.js'
const timelineItems = generateTimelineItems()
</script>

<template>
  <div class="mt-10">
    <ul>
      <li
        v-for="{ hour } in timelineItems"
        :key="hour"
        class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4"
      >
        <a
          href="#"
          class="absolute -top-4 left-1/2 -translate-x-1/2 rounded border bg-gray-100 px-2 font-mono text-lg text-gray-500 border-radius-2"
          >{{ hour }}:00</a
        >
      </li>
    </ul>
  </div>
</template>
