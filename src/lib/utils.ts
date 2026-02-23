import { clientEnv } from '@/env/client'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const pageTitle = (title: string) => {
  return `${clientEnv.VITE_APP_TITLE} - ${title}`
}
