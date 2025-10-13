import { cn } from "@/lib/utils"

/**
 * Renders a pulsing skeleton placeholder div with rounded corners.
 *
 * @param className - Additional CSS classes to merge with the default skeleton styles.
 * @param props - Additional props forwarded to the underlying div element.
 * @returns The rendered skeleton div element.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }