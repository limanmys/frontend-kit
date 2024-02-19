// Styles
import './style.css'

// API
import { usePaginatedQuery } from './api/queries/usePaginatedQuery.js'

// Components
import PageHeader from './components/PageHeader.vue'
import UploadFile from './components/UploadFile.vue'
import DropdownMenu from './components/DropdownMenu.vue'
import ColumnSelector from './components/ColumnSelector.vue'
import AsyncSelect from './components/AsyncSelect.vue'
import Error from './components/Error.vue'
import ModalInjector from './components/ModalInjector.vue'
import QuickDatePicker from './components/QuickDatePicker.vue'

// Utils
import { HttpClient } from './utils/http-common.js'
import AxiosClient from './utils/axios-client.js'
import can from './utils/can.js'
import createDebounce from './utils/debounce.js'
import { deepCopy } from './utils/deep-copy.js'
import { formatDate, formatTimeObject } from './utils/format-date.js'
import { lightThemeOverrides as LimanLightThemeOverrides, darkThemeOverrides as LimanDarkThemeOverrides } from './utils/theme-overrides.js'

// Stores
import { useModal } from './stores/useModal.js'

// Types
import type { IColumn } from './models/column.ts'
import type { IData } from './models/data.ts'
import type { IFilter } from './models/filter.ts'
import type { IPaginator } from './models/paginator.ts'
import type { IUploadedFile, IMetadata } from './models/uploaded-file.ts'

// Localization
import { locale as LimanLocaleProvider, date as LimanDateLocaleProvider } from './localization/provider/liman.js'
import { locales as ApexLocales } from './localization/apex/index.js'

export {
    // API
    usePaginatedQuery,

    // Components
    PageHeader,
    UploadFile,
    DropdownMenu,
    ColumnSelector,
    AsyncSelect,
    Error,
    ModalInjector,
    QuickDatePicker,

    // Utils
    HttpClient,
    AxiosClient,
    can,
    deepCopy,
    createDebounce,
    formatDate,
    formatTimeObject,
    LimanLightThemeOverrides,
    LimanDarkThemeOverrides,

    // Stores
    useModal,

    // Localization
    LimanLocaleProvider,
    LimanDateLocaleProvider,
    ApexLocales,
}

export type {
    // Types
    IColumn,
    IData,
    IFilter,
    IPaginator,
    IUploadedFile,
    IMetadata,
}