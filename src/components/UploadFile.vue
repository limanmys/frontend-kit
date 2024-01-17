<script setup lang="ts">
import type { IUploadedFile } from "../models/uploaded-file.ts"
import { NIcon, NP, NText, NUpload, NUploadDragger, type UploadCustomRequestOptions } from "naive-ui"
import { ref } from "vue"

const fileInformation = ref<IUploadedFile>()

const emits = defineEmits<{
  (e: "uploaded", data: IUploadedFile): void
}>()

const props = withDefaults(
  defineProps<{
    text?: string
    subtext?: string
    accept?: string
  }>(),
  {
    text: "Drag and drop a file here or click to select a file",
    subtext: "Make sure you don't upload any sensitive information. For example, passwords, credit card numbers, social security numbers, etc.",
    accept: ".jpg,.png",
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
</script>

<template>
  <NUpload :max="1" :accept="props.accept" :custom-request="customRequest">
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
