import { useEffect, useState } from 'react'
import { BREAKPOINTS } from '../styles/breakpoints'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < BREAKPOINTS.MD
  )

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < BREAKPOINTS.MD
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile, setIsMobile])

  return isMobile
}
