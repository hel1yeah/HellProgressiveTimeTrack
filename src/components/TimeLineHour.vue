<script setup>
import { isHourValid } from '@/common/validator.js'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid
  }
})

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded border px-2 font-mono text-lg border-radius-2',
  props.hour === new Date().getHours()
    ? 'bg-purple-900 front-back text-white'
    : 'bg-gray-100 text-gray-500'
]

const formattedHour = `${props.hour.toString().padStart(2, '0')}:00`
</script>

<template>
  <a href="#" :class="classes">{{ formattedHour }}</a>
</template>
