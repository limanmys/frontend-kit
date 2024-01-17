import type { apexEN } from './en.d.ts'
import type { apexTR } from './tr.d.ts'

interface Locale {
  name: string;
  options: apexEN | apexTR;
}

export declare let locales: Locale[]