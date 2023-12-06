<script setup>
import AppBaseButton from '@/components/AppBaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import {
  isOptionsValid,
  isUndefinedOrNull,
  isNumberOrNull
} from '@/common/validator.js'
import { computed } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: 'Rest'
  },
  selected: {
    type: Number || null,
    required: true,
    default: 1
  },
  options: {
    type: Array,
    required: true,
    validator: isOptionsValid
  }
})

const emit = defineEmits({
  select: isNumberOrNull
})

function onSelect(value) {
  emit('select', value)
}

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>

<template>
  <div class="flex gap-2">
    <AppBaseButton @click="onSelect(null)">
      <XMarkIcon class="h-8" />
    </AppBaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="onSelect(+$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in props.options"
        :key="value"
        :value="value"
        :selected="value === props.selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
