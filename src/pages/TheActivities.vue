<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline'
import AppBaseButton from '@/components/AppBaseButton.vue'
import AppBaseSelect from '@/components/AppBaseSelect.vue'

const activities = ['Coding', 'Reading', 'Training']

const periodSelectOptions = [
  {
    value: 15,
    label: '00:15'
  },
  {
    value: 30,
    label: '00:30'
  },
  {
    value: 45,
    label: '00:45'
  },
  {
    value: 60,
    label: '01:00'
  }
]
</script>

<template>
  <div>
    <ul class="divide-y">
      <li
        v-for="activity in activities"
        :key="activity"
        class="flex flex-col gap-2 p-4"
      >
        <div class="flex items-center gap-2">
          <AppBaseButton>
            <TrashIcon class="h-8" />
          </AppBaseButton>
          <span class="truncate text-xl"> {{ activity }} </span>
        </div>
        <div>
          <AppBaseSelect
            class="font-mono"
            :placeholder="'hh:mm'"
            :options="periodSelectOptions"
            :selected="Null"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
