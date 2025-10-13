import { cn } from "@/lib/utils"

/**
 * Render a styled keyboard key element.
 *
 * The component renders a <kbd> element with a data-slot of `"kbd"` and a set of preset utility classes; any additional `className` is appended and remaining props are spread onto the element.
 *
 * @param className - Additional CSS classes to append to the component's default classes
 * @returns A React `<kbd>` element with applied styling and `data-slot="kbd"`
 */
function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a container for a sequence of keyboard key elements.
 *
 * @returns A `<kbd>` element with `data-slot="kbd-group"`, the `inline-flex items-center gap-1` layout classes, and any provided props and `className` forwarded to the element.
 */
function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }