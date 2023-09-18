<script setup>
import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'
import { page_timeline, page_progress } from '@/common/constants.js'
const emit = defineEmits(['goTo'])

const onGoTo = (payload) => {
  emit('goTo', payload)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between border-b bg-white p-3"
  >
    <TheLogo @click="onGoTo(page_timeline)" />
    <TheHeaderProgress @click="onGoTo(page_progress)" />
  </header>
</template>
