"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

/**
 * Renders a vaul DrawerPrimitive.Root element annotated for slot-based styling.
 *
 * @returns The rendered Drawer root element with a `data-slot="drawer"` attribute and all received props forwarded.
 */
function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

/**
 * Renders a Drawer trigger element tagged with data-slot="drawer-trigger".
 *
 * Renders a vaul DrawerPrimitive.Trigger with the `data-slot="drawer-trigger"` attribute and forwards all received props.
 *
 * @returns A React element representing the drawer trigger.
 */
function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

/**
 * Wraps the Drawer primitive's Portal and tags it with a `data-slot` for drawer portals.
 *
 * @returns The portal element for drawer contents with `data-slot="drawer-portal"`.
 */
function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

/**
 * Renders a Drawer close control that applies the standardized `data-slot="drawer-close"` attribute and forwards all received props.
 *
 * @returns A Close element for the Drawer with `data-slot="drawer-close"` and the provided props applied.
 */
function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

/**
 * Renders the drawer's backdrop overlay with built-in open/close animations.
 *
 * @param className - Additional class names to merge with the overlay's default backdrop and animation classes
 * @returns The drawer overlay element (backdrop) with merged classes and data-slot="drawer-overlay"
 */
function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the drawer content inside a portal with an overlay and direction-aware styling.
 *
 * Renders a vaul DrawerPrimitive.Content wrapped in a DrawerPortal and accompanied by a DrawerOverlay.
 * The component applies responsive, direction-specific layout and border/rounding classes and forwards any extra props.
 *
 * @param className - Additional class names to merge with the component's default styling
 * @param children - Content to render inside the drawer
 * @returns The rendered drawer content element with its portal and overlay
 */
function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

/**
 * Renders the header area for a Drawer with standardized slot attribute and layout styles.
 *
 * @param className - Additional class names to merge with the component's default layout classes.
 * @param props - Additional div props forwarded to the rendered element.
 * @returns A div element used as the drawer header, annotated with `data-slot="drawer-header"`.
 */
function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the drawer's footer area and anchors it to the bottom of the content.
 *
 * Applies base layout and spacing classes and forwards any div props. Adds a
 * `data-slot="drawer-footer"` attribute for slot-based styling/hooks.
 *
 * @returns The footer DOM element for the drawer with merged `className` and forwarded props
 */
function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

/**
 * Renders the drawer title element with standardized typography and slot tagging.
 *
 * @returns A DrawerPrimitive.Title element with `data-slot="drawer-title"` and combined classes: `text-foreground font-semibold` plus any provided `className`.
 */
function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the drawer's description element with standardized muted typography.
 *
 * @returns The rendered drawer description element.
 */
function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}