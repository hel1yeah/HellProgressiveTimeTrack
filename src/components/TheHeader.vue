<script setup>
import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'
import { PAGE_TIMELINE, PAGE_PROGRESS } from '@/common/constants.js'
import { isPageValid } from '@/common/validator.js'

const emit = defineEmits({
  navigate: isPageValid
})

const onGoTo = (payload) => {
  emit('navigate', payload)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between border-b bg-white p-3"
  >
    <TheLogo @click="onGoTo(PAGE_TIMELINE)" />
    <TheHeaderProgress @click="onGoTo(PAGE_PROGRESS)" />
  </header>
</template>
