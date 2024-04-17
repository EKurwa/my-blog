import { ReactNode } from 'react'
import module from './index.module.scss'
const DisCon: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={module.disContaienr}>{children}</div>
    </>
  )
}

export default DisCon
