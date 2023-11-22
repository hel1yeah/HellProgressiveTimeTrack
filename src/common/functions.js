import {
  PAGE_TIMELINE,
  HOURS_IN_DAY,
  MIDNIGHT_HOUR
} from '@/common/constants.js'

import { isPageValid } from '@/common/validator.js'

function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid()) {
    return page
  }

  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour <= HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour
    })
  }
  return timelineItems
}

export { normalizePageHash, generateTimelineItems }
