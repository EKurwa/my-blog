import module from './index.module.scss'
import SvgIcon from '/@/components/svgIcon'

import { getPhofromAssets } from '/@/utils/files'
const Home = () => {
  return (
    <>
      <div className="HomeImageContainer">
        <div className={module.bg}>
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
          <div className={module.downSee}>
            <span>开始阅读</span>
            <SvgIcon classname={module.down} fontSize={25} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
