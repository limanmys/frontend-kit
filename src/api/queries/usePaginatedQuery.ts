import { deepCopy, type IData, type IFilter, type IPaginator } from "../../index"
import http from "../../utils/http-common"
import { keepPreviousData, useQuery } from "@tanstack/vue-query"
import type { UseQueryReturnType } from "@tanstack/vue-query"
import type { Ref } from "vue"

interface UsePaginatedQueryOpts {
  page?: number | Ref<number>
  per_page?: number | Ref<number>
  sort?: string | Ref<string>
  search?: string | Ref<string>
  filters?: IFilter[] | Ref<IFilter[]>
  date?: string | Ref<string> | Ref<number[]>
  options?: any
}

export const usePaginatedQuery = (url: string, _options: UsePaginatedQueryOpts = {}) => {
  const {
    page = 1,
    per_page = 10,
    sort = "",
    search = "",
    filters = [],
  } = _options

  return useQuery({
    queryKey: [
      url,
      {
        page,
        per_page,
        sort,
        search,
        filter: filters,
      },
    ],
    queryFn: async ({ queryKey }) => {
      const queries = deepCopy(queryKey[1] as any)
      queries.filter = JSON.stringify(queries.filter)
      for (const key in queries) {
        if (queries[key] === "") {
          delete queries[key]
        }
      }
      const query = new URLSearchParams(queries).toString()
      const res = await http.get(`${queryKey[0]}?${query}`)
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      return res.data
    },
    retry: 0,
    placeholderData: keepPreviousData,
    ..._options.options,
  }) as UseQueryReturnType<IPaginator<IData>, Error>
}
