<script setup>
import AppBaseSelect from '@/components/AppBaseSelect.vue'
import TimeLineHour from '@/components/TimeLineHour.vue'
import { isTimelineItemValid } from '@/common/validator.js'
import { ref } from 'vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const options = [
  {
    value: 1,
    label: 'Coding'
  },
  {
    value: 2,
    label: 'Reading'
  },
  {
    value: 3,
    label: 'Training'
  }
]

const selectedActivityId = ref(1)

function updateSelectedActivityId(activityId) {
  selectedActivityId.value = activityId
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimeLineHour :hour="timelineItem.hour" />
    <AppBaseSelect
      :selected="selectedActivityId"
      :options="options"
      :placeholder="'Rest'"
      @select="updateSelectedActivityId"
    />
  </li>
</template>
