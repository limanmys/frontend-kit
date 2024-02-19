<script setup lang="ts">
import { formatDate } from "../utils/format-date.js"
import { useThemeVars } from "naive-ui"
import { computed, defineModel, ref } from "vue"

const value = defineModel("value", {
  required: true,
  default: [
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Subtract 7 days from current date
    new Date(Date.now()),
  ],
})

const vars = useThemeVars()
const gridStyle = {
  padding: "15px 10px",
  borderRight: `1px solid ${vars.value.borderColor}`,
}

const showPopover = ref(false)

const translatedValues = computed(() => {
  return [formatDate(value.value[0]), formatDate(value.value[1])]
})

const fastValues = [
  {
    label: "Son 10 Dakika",
    value: 10,
  },
  {
    label: "Geçen Saat",
    value: 60,
  },
  {
    label: "Son 2 Saat",
    value: 120,
  },
  {
    label: "Son 12 Saat",
    value: 60 * 12,
  },
  {
    label: "Geçen Gün",
    value: 60 * 24,
  },
  {
    label: "Son 5 Gün",
    value: 60 * 24 * 5,
  },
  {
    label: "Geçen Hafta",
    value: 60 * 24 * 7,
  },
  {
    label: "Geçen Ay",
    value: 60 * 24 * 30,
  },
  {
    label: "Son 90 Gün",
    value: 60 * 24 * 90,
  },
]

const setValue = (minutes: number) => {
  value.value = [new Date(Date.now() - minutes * 60 * 1000), new Date()]
}
</script>

<template>
  <n-popover
    trigger="manual"
    :show="showPopover"
    placement="bottom"
    :show-arrow="true"
  >
    <template #trigger>
      <n-input
        pair
        :value="translatedValues"
        :allow-input="() => false"
        :passively-activated="true"
        @click="showPopover = true"
      >
        <template #prefix>
          <i class="fa-solid fa-calendar" />
        </template>
        <template #separator>
          <i class="fa-solid fa-arrow-right" />
        </template>
      </n-input>
    </template>
    <n-grid :cols="5" style="min-width: 500px; margin: -10px 0">
      <n-gi :style="gridStyle" span="2" style="overflow: hidden">
        <span
          class="text-muted text-uppercase"
          style="font-size: 12px; display: block"
        >
          Hızlı Seçim
        </span>
        <div
          class="btn-container"
          style="margin-left: -10px; margin-right: -20px"
        >
          <n-button
            quaternary
            size="small"
            style="font-size: 13px; width: 100%; display: block"
            @click="setValue(item.value)"
            v-for="item in fastValues"
            v-bind:key="item.label"
          >
            {{ item.label }}
          </n-button>
        </div>
      </n-gi>
      <n-gi style="padding: 15px 15px; padding-right: 3px" span="3">
        <span
          class="text-muted text-uppercase"
          style="font-size: 12px; display: block; margin-bottom: 10px"
        >
          Özel Seçim
        </span>

        <n-space vertical class="mb-4">
          <span style="font-size: 13px; display: block"> Başlangıç </span>
          <n-date-picker v-model:value="value[0]" type="date" />
          <n-time-picker v-model:value="value[0]" type="time" format="HH:mm" />
        </n-space>

        <n-space vertical>
          <span style="font-size: 13px; display: block"> Bitiş </span>
          <n-date-picker v-model:value="value[1]" type="date" />
          <n-time-picker v-model:value="value[1]" type="time" format="HH:mm" />
        </n-space>
      </n-gi>
    </n-grid>
    <template #footer>
      <n-space justify="end">
        <n-button size="tiny" @click="setValue(60 * 24 * 7)">
          Sıfırla
        </n-button>

        <n-button size="tiny" type="primary" @click="showPopover = false">
          Onayla
        </n-button>
      </n-space>
    </template>
  </n-popover>
</template>
