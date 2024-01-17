import type { apexEN } from './apex/en.d.ts'
import type { apexTR } from './apex/tr.d.ts'

interface Locale {
  name: string;
  options: apexEN | apexTR;
}

export declare let locales: Locale[]