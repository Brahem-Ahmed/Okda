"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * Wraps the Radix Collapsible Root and attaches a `data-slot="collapsible"` attribute.
 *
 * Forwards all received props to the underlying Radix Collapsible Root element.
 *
 * @param props - Props to pass through to the Radix Collapsible Root
 * @returns The rendered Collapsible Root element with `data-slot="collapsible"`
 */
function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

/**
 * Renders a collapsible trigger element with `data-slot="collapsible-trigger"` and forwards all received props.
 *
 * @param props - Props to spread onto the underlying trigger element.
 * @returns A React element for the collapsible trigger.
 */
function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

/**
 * Renders a CollapsibleContent element with `data-slot="collapsible-content"` and forwards all received props to it.
 *
 * @param props - Props forwarded to the underlying Radix CollapsibleContent component
 * @returns The rendered CollapsibleContent element with `data-slot="collapsible-content"`
 */
function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }