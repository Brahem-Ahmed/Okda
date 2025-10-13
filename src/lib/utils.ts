import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge and normalize class value inputs into a single class name string with Tailwind conflicts resolved.
 *
 * @param inputs - One or more class values (strings, arrays, objects, or conditional mappings) to combine
 * @returns The merged class name string with conflicting Tailwind utility classes resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}