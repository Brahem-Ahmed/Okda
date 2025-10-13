import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Render a styled native textarea element with default classes merged with any provided classes and all other props forwarded.
 *
 * @param className - Additional CSS class names to merge with the component's default styling.
 * @param props - Remaining standard textarea props are forwarded to the underlying element.
 * @returns A textarea React element with the component's default styling, `className` merged, and all provided props applied.
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }