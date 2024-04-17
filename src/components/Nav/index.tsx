import module from './index.module.scss'
const Nav = () => {
  return (
    <>
      <div className={module.contaienr}>
        <div className={module.left}>
          <div>clown的小站</div>
        </div>
        <div className={module.right}>
          <div>首页</div>
          <div>搜索</div>
          <div>前端概览</div>
          <div>后端概览</div>
          <div>生活概览</div>
          <div>标签</div>
        </div>
      </div>
    </>
  )
}

export default Nav
