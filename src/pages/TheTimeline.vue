<script setup>
import TimelineItem from '@/components/TimeLineItem.vue'
import { generateTimelineItems } from '@/common/functions.js'
const timelineItems = generateTimelineItems()
</script>

<template>
  <div class="mt-10">
    <ul>
      <timeline-item
        v-for="timeLineItem in timelineItems"
        :key="timeLineItem.hour"
        :timeline-item="timeLineItem"
      />
    </ul>
  </div>
</template>
