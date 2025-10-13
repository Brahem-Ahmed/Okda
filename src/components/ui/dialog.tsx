"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Render a Dialog root element with a consistent `data-slot="dialog"` attribute.
 *
 * @param props - Props forwarded to the underlying Radix UI Dialog Root
 * @returns A Dialog root element with `data-slot="dialog"` and all provided props applied
 */
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

/**
 * Renders a dialog trigger element and sets `data-slot="dialog-trigger"`.
 *
 * @param props - Props forwarded to the trigger element.
 * @returns The trigger element used to open the dialog.
 */
function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/**
 * Renders a portal element with `data-slot="dialog-portal"` for mounting dialog content.
 *
 * @returns The portal element that mounts dialog children into the document.
 */
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/**
 * Renders a Radix Dialog Close control with a `data-slot="dialog-close"` attribute.
 *
 * @returns A `DialogPrimitive.Close` element with the provided props and `data-slot` set to `"dialog-close"`.
 */
function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

/**
 * Renders the dialog overlay element with default styling and a `data-slot="dialog-overlay"` attribute.
 *
 * The provided `className` is merged with the component's default overlay classes.
 *
 * @returns The rendered overlay element for the dialog
 */
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders dialog content inside a portal with an overlay and an optional close button.
 *
 * The component mounts a centered, styled dialog surface with built-in sizing, animations, and shadow; it also renders an overlay beneath the content. When enabled, a visually-hidden labelled close control is placed in the top-right corner.
 *
 * @param showCloseButton - If `true`, render the close button in the top-right corner. Defaults to `true`.
 * @returns The composed dialog content element (portal → overlay → content).
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

/**
 * Renders a dialog header container with responsive alignment and spacing.
 *
 * The element includes data-slot="dialog-header" and merges provided `className`
 * with the component's default layout and typography classes.
 *
 * @returns A `div` element with the dialog header classes and the `data-slot="dialog-header"` attribute.
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/**
 * Renders the dialog footer container that arranges action controls responsively.
 *
 * @returns A `div` element used as the dialog footer with responsive layout: column-reverse with gaps on small screens and a right-aligned row on larger screens. The `className` prop is merged with the component's default classes.
 */
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render the dialog title element with default typography and a data-slot of "dialog-title".
 *
 * @param className - Additional CSS class names to merge with the component's default classes
 * @returns The rendered DialogPrimitive.Title element with combined classes and data-slot "dialog-title"
 */
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders a dialog description element with default muted styling and slot metadata.
 *
 * @param className - Additional CSS classes to merge with the component's default classes
 * @returns A DialogPrimitive.Description React element with data-slot "dialog-description", default muted/size classes, and any provided `className`
 */
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}