import module from './index.module.scss'
import Nav from '../Nav'

const Header = () => {
  return (
    <>
      <header className={module.header}>
        <Nav />
      </header>
    </>
  )
}

export default Header
