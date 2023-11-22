<script setup>
import TimelineItem from '@/components/TimeLineItem.vue'
import { HOURS_IN_DAY } from '@/common/constants.js'

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator(timelineItems) {
      return timelineItems.every(
        ({ hour }) =>
          typeof hour === 'number' && hour >= 0 && hour <= HOURS_IN_DAY
      )
    }
  }
})
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
