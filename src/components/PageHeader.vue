<script setup lang="ts">
import { NH2, NText } from 'naive-ui';

const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="mb-4">
    <NH2
      class="mb-1"
      style="font-weight: 700; letter-spacing: -0.025em; font-size: 1.5rem"
      >{{ props.title }}</NH2
    >
    <NText depth="3"> {{ props.description }} </NText>
  </div>
</template>
