import { useRef, forwardRef, ReactNode } from 'react'
import { mergeRefs } from 'react-merge-refs'

interface LayoutProps {
  children?: ReactNode
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children }, ref) => {
  const localRef = useRef<HTMLDivElement>()
  return (
    <div ref={mergeRefs([ref, localRef])} className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
