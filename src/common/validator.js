import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from '@/common/constants.js'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isTimelineItemsValid(timelineItems) {
  return (
    Array.isArray(timelineItems) && timelineItems.every(isTimelineItemValid)
  )
}

export function isOptionsValid(options) {
  return options.every(({ value, label }) => isNumber(value) && isString(label))
}

export function isHourValid(hour) {
  return isNumber(hour) && isBeetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isUndefinedOrNull(value) {
  return isUndefinded(value) || isNull(value)
}

function isBeetween(value, start, end) {
  return value >= start && end <= end
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isNull(value) {
  return value === null
}

export function isUndefinded(value) {
  return value === undefined
}
export function isNumber(value) {
  return typeof value === 'number'
}

export function isString(value) {
  return typeof value === 'string'
}
