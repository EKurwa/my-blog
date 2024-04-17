import module from './index.module.scss'
import avatar from '/@/assets/images/avatar.jpg'
import SvgIcon from '/@/components/svgIcon'
const Person = () => {
  return (
    <div className={module.personalContainer}>
      <div className={module.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={module.nickName}>clown__yd</div>
      <div className={module.signature}>学习技术，提升自我，热爱生活</div>
      <div className={module.information}>
        <ul>
          <li>
            <span>文章</span>
            <span>53</span>
          </li>
          <li>
            <span>分类</span>
            <span>3</span>
          </li>
          <li>
            <span>标签</span>
            <span>53</span>
          </li>
        </ul>
      </div>
      <div className={module.contact}>
        <SvgIcon
          classname={module.contactItem}
          fontSize={25}
          icon="QQ"
          color="var(--personal-info-color)"
        />
        <SvgIcon
          classname={module.contactItem}
          fontSize={25}
          icon="wechat-fill"
          color="var(--personal-info-color)"
        />
        <SvgIcon
          classname={module.contactItem}
          fontSize={25}
          icon="github"
          color="var(--personal-info-color)"
        />
      </div>
    </div>
  )
}

export default Person
