import { useEffect, useState, useRef } from 'react'
import module from './index.module.scss'
const Content: React.FC<{ orderNumber: number }> = ({ orderNumber }) => {
  const [active, setActive] = useState(false)
  const boxRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(([entiry]) => {
        if (entiry.intersectionRatio > 0) {
          setActive(true)
        }
      })
      if (boxRef.current) {
        observer.observe(boxRef.current)
      }
      if (active) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
    window.addEventListener('scroll', handleScroll)
  })
  return (
    <div
      ref={boxRef}
      className={`${module.containerBox} animate__animated ${active ? 'animate__fadeInUp' : ''}`}
    >
      <div className={module.article} style={{ '--order-number': orderNumber }}>
        <h2 className={module.title}>
          <span>马来西亚BigPay，2024注册与使用教程</span>
        </h2>
        <div className={module.tag}>
          <span>云移民</span>
        </div>
        <div className={module.subtitle}>
          <span>
            Bigpay是亚航推出的一款电子钱包，有一张实体卡和虚拟卡，都是Visa卡，支持duitnow。
          </span>
        </div>
        <div className={module.notes}>
          <div className={module.date}>2023-10-10</div>
          <div className={module.tags}>
            <span>境外账户</span>
            <span>电子钱包</span>
            <span>薅羊毛</span>
          </div>
        </div>
      </div>
      <div className={module.image}>
        <img
          src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe63edc06-9ce7-4877-990b-2efe658d9c01%2F4fe826a1-cd84-4b78-83d0-3d42d7f29a1c%2Fscreenshot-20240413-005757.png?table=block&id=f2f60a9d-5889-4b53-b411-94197e2b92db&t=f2f60a9d-5889-4b53-b411-94197e2b92db&width=800&cache=v2"
          alt=""
        />
      </div>
    </div>
  )
}
export default Content
