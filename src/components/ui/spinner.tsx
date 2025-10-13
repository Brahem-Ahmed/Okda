import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Renders an accessible animated spinner SVG.
 *
 * The component outputs a Loader2Icon SVG with default classes "size-4 animate-spin", forwards all other SVG props, and sets role="status" and aria-label="Loading" for accessibility.
 *
 * @param className - Additional CSS class names to merge with the default spinner classes
 * @returns The rendered spinner SVG element
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }