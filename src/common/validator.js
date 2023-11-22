import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from '@/common/constants.js'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return (
    typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour <= HOURS_IN_DAY
  )
}

export function isTimelineItemsValid(timelineItems) {
  return (
    Array.isArray(timelineItems) && timelineItems.every(isTimelineItemValid)
  )
}

export function isOptionsValid(options) {
  return options.every(
    ({ value, label }) => typeof value === 'number' && typeof label === 'string'
  )
}
