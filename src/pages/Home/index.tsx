import module from './index.module.scss'
import SvgIcon from '/@/components/svgIcon'
import DisCon from '/@/components/Common/DisCon'
import Content from '/@/components/Common/Card/Content'
import { getPhofromAssets } from '/@/utils/files'
import { useEffect } from 'react'
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const goToRead = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="HomeImageContainer animate__animated animate__fadeIn">
        <div className={`${module.bg}`}>
          <img
            className="animate__backInDown"
            src={getPhofromAssets('images/Hippopx.jpg')}
            alt=""
          />
        </div>
        <div className={module.desc}>
          <div className={module.textContainer}>
            <div className={module.title}>clown的小站</div>
            <div className={module.subtitle}>欢迎来到我的博客🎉</div>
          </div>
          <div className={module.navContaienr}>
            <a title="vue">Vue</a>
            <a title="react">React</a>
            <a title="life">LIFE</a>
          </div>
          <div className={module.downSee} onClick={goToRead}>
            <span>开始阅读</span>
            <SvgIcon classname={module.down} fontSize={25} icon="xia" />
          </div>
        </div>
      </div>
      <DisCon>
        {new Array(10).fill(0).map((_: number, index: number) => (
          <Content key={index} orderNumber={index % 2} />
        ))}
      </DisCon>
    </>
  )
}

export default Home
