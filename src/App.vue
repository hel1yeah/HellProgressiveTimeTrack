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

const currentPage = ref(normalizePageHash())

function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if ([page_timeline, page_activities, page_progress].includes(hash)) {
    return hash
  }

  window.location.hash = page_timeline
  return page_timeline
}

const onChangePageHandler = (page) => {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @go-to="onChangePageHandler($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === page_timeline" />
    <TheActivities v-show="currentPage === page_activities" />
    <TheProgress v-show="currentPage === page_progress" />
  </main>

  <TheNav @navigate="onChangePageHandler($event)" :current-page="currentPage" />
</template>

<style scoped></style>
