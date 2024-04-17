import module from './index.module.scss'
import Nav from '../Nav'
import { useState, useRef, useEffect } from 'react'

const Header = () => {
  const [status, setStatus] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const homeImageContainer = document.querySelector('.HomeImageContainer')
    let lastScrollTop = 0

    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (!entry.intersectionRatio) {
        setStatus(true)
      } else {
        setStatus(false)
      }
    }

    observer = new IntersectionObserver(handleIntersection)

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

      if (Math.abs(scrollTop) > window.innerHeight) {
        if (lastScrollTop > scrollTop) {
          headerRef.current!.style.opacity = '1'
        } else {
          headerRef.current!.style.opacity = '0'
        }
        lastScrollTop = scrollTop
      }
    }

    window.addEventListener('scroll', handleScroll)

    if (homeImageContainer) {
      observer.observe(homeImageContainer)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <>
      <header ref={headerRef} className={`${module.header} ${status ? module.visible : ''}`}>
        <Nav />
      </header>
    </>
  )
}

export default Header
