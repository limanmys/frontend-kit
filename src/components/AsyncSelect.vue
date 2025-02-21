<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import createDebounce from "../utils/debounce.js";
import type { IFilter } from "../models/filter.ts";

export interface Props {
  dispatcher: (payload?: IFilter, ...args: any) => Promise<any>;
  data: any[];
  value: string | string[] | null;
  labelField: string;
  valueField: string;
  placeholder?: string;
  multiple?: boolean;
  args: any[]
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Search...",
  multiple: false,
  args: [] as any,
});

const emit = defineEmits<{
  (event: "update:value", ...args: any[]): void;
}>();

const value = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("update:value", value);
  },
});

const searchDebounce = createDebounce();

const loading = ref(true);

const search = (query: string) => {
  loading.value = true;
  searchDebounce(() => {
    props
      .dispatcher({
        search: query,
        per_page: 20,
      }, ...props.args)
      .then(() => {
        loading.value = false;
      });
  }, 300);
};

onMounted(() => {
  props.dispatcher({ per_page: 50 }, ...props.args).then(() => {
    loading.value = false;
  });
});
</script>

<template>
  <n-select
    v-model:value="value"
    filterable
    :placeholder="props.placeholder"
    :options="props.data"
    :loading="loading"
    clearable
    remote
    :clear-filter-after-select="false"
    @search="search"
    :label-field="props.labelField"
    :value-field="props.valueField"
    :multiple="props.multiple"
  />
</template>
