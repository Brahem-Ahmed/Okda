import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * Determine whether the current viewport width is considered mobile.
 *
 * Uses the `MOBILE_BREAKPOINT` threshold (768) to classify the viewport size and updates as the window size changes.
 *
 * @returns `true` if the viewport width is less than `MOBILE_BREAKPOINT` (768), `false` otherwise.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}