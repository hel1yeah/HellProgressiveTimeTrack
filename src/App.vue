<script setup>
import { ref } from 'vue'

import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'

import {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS
} from '@/common/constants.js'

import { normalizePageHash, generateTimelineItems } from '@/common/functions.js'

const timelineItems = generateTimelineItems()
const currentPage = ref(normalizePageHash())

const onChangePageHandler = (page) => {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigate="onChangePageHandler" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timelineItems="timelineItems"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav @navigate="onChangePageHandler" :current-page="currentPage" />
</template>

<style scoped></style>
