import {
  page_timeline,
  page_activities,
  page_progress,
  HOURS_IN_DAY
} from '@/common/constants.js'

function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if ([page_timeline, page_activities, page_progress].includes(hash)) {
    return hash
  }

  window.location.hash = page_timeline
  return page_timeline
}

function generateTimelineItems() {
  const timelineItems = []
  for (let hour = 0; hour <= HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour
    })
  }
  return timelineItems
}

export { normalizePageHash, generateTimelineItems }
