import { reactive, markRaw } from "vue"

export type Modal = {
  isOpen: boolean
  title: string
  content: object
  formMode: boolean
  formOptions: object
}

export const useModal: any = reactive({
  isOpen: false,
  title: "",
  content: markRaw({}),
  formMode: false,
  formOptions: {},

  open(_options: Partial<Modal>) {
    const { title, content, formMode, formOptions } = _options

    this.isOpen = true
    this.title = title || ""
    this.content = markRaw(content || {})
    this.formMode = formMode || false
    this.formOptions = formOptions || {}
  },

  close() {
    this.isOpen = false
    this.title = ""
    this.content = markRaw({})
    this.formMode = false
    this.formOptions = {}
  },
})
