<script setup lang="ts">
import { NButton, NDropdown } from 'naive-ui';

const props = defineProps<{
  options: any[]
}>()
</script>

<template>
  <NDropdown :options="props.options">
    <NButton size="small" quaternary
      ><i class="fas fa-ellipsis-vertical"
    /></NButton>
  </NDropdown>
</template>
