<script setup lang="ts">
import { useModal as modal } from "../stores/useModal.js"
import { watch } from "vue"

watch(
  () => modal.isOpen,
  (value) => {
    if (!value) {
      close()
    }
  },
)
</script>

<template>
  <n-drawer v-model:show="modal.isOpen" resizable :min-width="500">
    <n-drawer-content :title="modal.title">
      <template v-if="!modal.formMode">
        <component :is="modal.content" />
      </template>
      <template v-else>
        <form-create
          :rule="modal.formOptions.rule"
          :option="modal.formOptions.options"
        />
      </template>
      <template #footer>
        <n-space justify="end"> </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
