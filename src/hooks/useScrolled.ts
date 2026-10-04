import { useEffect, useState } from 'react'
export function useScrolled(offset = 24) {
  const [s, setS] = useState(false)
  useEffect(() => {
    const f = () => setS(window.scrollY > offset)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [offset])
  return s
}
