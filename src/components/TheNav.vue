<script setup>
import { NAV_ITEMS } from '@/common/constants.js'
import { isPageValid } from '@/common/validator.js'
defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid
  }
})
const emit = defineEmits(['navigate'])
const onChangePage = (payload) => {
  emit('navigate', payload)
}

import NavItem from '@/components/NavItem.vue'
</script>
<template>
  <nav class="sticky bottom-0 z-50 bag bg-white text-3x1">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="onChangePage(page)"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
