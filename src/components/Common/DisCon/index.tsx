import module from './index.module.scss'
import Person from '../Card/Person'
import { ReactNode } from 'react'
const DisCon: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={module.disContaienr}>
        <div className={module.leftContainer}>{children}</div>
        <div className={module.rightContaienr}>
          <Person />
        </div>
      </div>
    </>
  )
}

export default DisCon
