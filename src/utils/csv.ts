import type { IData } from "../models/data.ts"
import { Parser } from "@json2csv/plainjs"
import fileDownload from "js-file-download"
import { enUS, tr } from "date-fns/locale"
import { format } from "date-fns"

const csvExport = (data: IData[] | undefined, delimiter: string) => {
  try {
    const parser = new Parser({ delimiter })
    const csv = parser.parse(data)
    fileDownload(
      csv,
      `${format(Date.now(), "dd MMMM yyyy HH:mm:ss", {
        locale: document.documentElement.lang == "tr" ? tr : enUS,
      })}.csv`
    )
  } catch (err) {
    console.error(err)
  }
}

export default csvExport