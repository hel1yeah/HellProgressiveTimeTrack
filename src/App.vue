<script setup>
import { ref } from 'vue'

import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'

import {
  page_timeline,
  page_activities,
  page_progress
} from '@/common/constants.js'

import { normalizePageHash, generateTimelineItems } from '@/common/functions.js'

const timelineItems = generateTimelineItems()
const currentPage = ref(normalizePageHash())

const onChangePageHandler = (page) => {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @go-to="onChangePageHandler" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === page_timeline"
      :timelineItems="timelineItems"
    />
    <TheActivities v-show="currentPage === page_activities" />
    <TheProgress v-show="currentPage === page_progress" />
  </main>

  <TheNav @navigate="onChangePageHandler" :current-page="currentPage" />
</template>

<style scoped></style>
