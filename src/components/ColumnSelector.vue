<script setup lang="ts">
import { NButton, NCheckbox, NDropdown, NSelect, NSpace } from "naive-ui";
import { h, ref, toRefs } from "vue";
import type { IColumn } from "../models/column.ts";
import type { IData } from "../models/data.ts";
import csvExport from "../utils/csv.js";

const props = withDefaults(
  defineProps<{
    columns: IColumn[];
    data?: IData[];
    csvText?: string;
  }>(),
  {
    csvText: "Export CSV",
  }
);
const delimiter = ref(",");

const { columns } = toRefs(props);

function render() {
  return h(
    "div",
    {
      style: "display: flex; align-items: center; padding: 8px 12px;",
    },
    [
      h(NSpace, { vertical: true }, [
        props.data
          ? h(NSpace, {}, [
              h(
                NButton,
                {
                  type: "primary",
                  size: "small",
                  "on-click": () => {
                    csvExport(props.data, delimiter.value);
                  },
                },
                {
                  default: () => [
                    h("i", { class: "fas fa-file-csv mr-2" }),
                    props.csvText,
                  ],
                }
              ),
              // selectbox to select seperator ; or ,
              h(NSelect, {
                size: "small",
                style: "width: 50px;",
                options: [
                  { label: ";", value: ";" },
                  { label: ",", value: "," },
                ],
                defaultValue: ",",
                "on-update:value": (e: string) => {
                  delimiter.value = e;
                },
              }),
            ])
          : null,
        ...Array.from(columns.value, (column) => {
          if (
            column.key == "id" ||
            column.key == "actions" ||
            column.type == "selection" ||
            !column.title
          ) {
            return;
          }
          return h(NCheckbox, {
            label: column.title,
            value: column.key,
            checked: column.show ? true : false,
            // Disabled if show count is 3 or less
            disabled:
              columns.value.filter((c) => c.show).length <= 3 && column.show,
            "on-update:checked": (e: boolean) => {
              // Get show property count
              const showCount = columns.value.filter((c) => c.show).length;
              // If show count is 2 and user uncheck the checkbox, then do not uncheck
              if (showCount == 3 && !e) {
                return;
              }
              column.show = e;
            },
          });
        }),
      ]),
    ]
  );
}
</script>

<template>
  <NDropdown
    trigger="hover"
    :options="[
      {
        key: 'render',
        type: 'render',
        render: render,
      },
    ]"
  >
    <NButton type="primary"><i class="fas fa-cogs"></i></NButton>
  </NDropdown>
</template>
