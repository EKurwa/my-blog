import module from './index.module.scss'
import Nav from '../Nav'
import { useState, useEffect } from 'react'

const Header = () => {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const handleScroll = () => {
      const homeImageContainer = document.querySelector('.HomeImageContainer')
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.intersectionRatio) {
          setStatus(true)
        } else {
          setStatus(false)
        }
      })
      observer.observe(homeImageContainer!)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  console.log('status', status)

  return (
    <>
      <header className={`${module.header} ${status ? module.visible : ''}`}>
        <Nav />
      </header>
    </>
  )
}

export default Header
