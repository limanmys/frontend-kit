<script setup lang="ts">
import type { IUploadedFile } from "../models/uploaded-file.ts"
import { HttpClient } from "../utils/http-common.js"
import { NIcon, NP, NText, NUpload, NUploadDragger, type UploadCustomRequestOptions } from "naive-ui"
import { ref } from "vue"

const http = new HttpClient()

const fileInformation = ref<IUploadedFile>()
const emits = defineEmits<{
  (e: "uploaded", data: IUploadedFile): void
}>()

const props = withDefaults(
  defineProps<{
    text?: string
    subtext?: string
  }>(),
  {
    text: "Drag and drop a file here",
    subtext: "or click to select a file",
  },
)

const customRequest = ({
  file,
  onFinish,
  onError,
  onProgress,
}: UploadCustomRequestOptions) => {
  window.upload({
    file: file.file,
    onError: onError(),
    onProgress: function (bytesUploaded: number, bytesTotal: number) {
      onProgress({
        percent: (bytesUploaded / bytesTotal) * 100,
      })
    },
    onSuccess: function (upload: any) {
      fileInformation.value = upload.info
      emits("uploaded", upload.info)
      onFinish()
    },
  })
}

const handleRemove = () => {
  http
    .php("cancelUpload", {
      name: fileInformation.value?.name,
    })
    .then((res) => {
      if (res.status == 200) {
        fileInformation.value = undefined
      }
    })
}
</script>

<template>
  <NUpload :max="1" :custom-request="customRequest" @remove="handleRemove">
    <NUploadDragger>
      <div style="margin-bottom: 18px">
        <NIcon size="48" :depth="3">
          <i
            class="fa-solid fa-upload fa-fw"
            style="color: rgba(0, 0, 0, 0.8)"
          ></i>
        </NIcon>
      </div>
      <NText style="font-size: 16px">
        {{ props.text }}
      </NText>
      <NP depth="3" style="margin: 8px 0 0 0">
        {{ props.subtext }}
      </NP>
    </NUploadDragger>
  </NUpload>
</template>
