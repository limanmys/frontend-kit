<script setup lang="ts">
import { NButton, NCard, NLog, NResult } from 'naive-ui';

const props = withDefaults(
  defineProps<{
    error: any;
    stack: any;
    refresh_text?: string;
    error_title?: string;
  }>(),
  {
    error: "",
    stack: "",
    refresh_text: "Refresh",
    error_title: "Error"
  }
);

const reload = () => {
  window.location.hash = "";
  window.location.reload();
};
</script>

<template>
  <NCard style="align-items: center; justify-content: center">
    <NResult status="error" :title="props.error_title" :description="props.error">
    </NResult>
    <br />

    <center>
      <NButton type="primary" @click="reload()"
        ><i class="fa-solid fa-sync mr-2"></i>{{ props.refresh_text }}</NButton
      >
    </center>

    <br />
    <br />
    <NLog v-if="props.stack.length > 0" :log="`${props.stack}`" />
  </NCard>
</template>
