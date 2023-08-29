<script setup>
import { ref } from 'vue'
import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

import {
  page_timeline,
  page_activities,
  page_progress
} from '@/common/constants.js'

import NavItem from '@/components/NavItem.vue'
const navItems = {
  [page_timeline]: ClockIcon,
  [page_activities]: ListBulletIcon,
  [page_progress]: ChartBarIcon
}

const currentPage = ref(normalizePageHash())

function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if (Object.keys(navItems).includes(hash)) {
    return hash
  }

  window.location.hash = page_timeline
  return page_timeline
}
</script>
<template>
  <nav class="sticky bottom-0 z-50 bag bg-white text-3x1">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="currentPage === page ? '' : (currentPage = page)"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
