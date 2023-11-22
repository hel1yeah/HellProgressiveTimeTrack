<script setup>
import TimelineItem from '@/components/TimeLineItem.vue'
import { isTimelineItemsValid } from '@/common/validator.js'

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: isTimelineItemsValid
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
