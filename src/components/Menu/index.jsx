import styles from './menu.module.scss'
import { Icon } from '../Icon'

import icons from './icons.json'

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {icons.map(icon => {
          return (
            <Icon key={icon.id} icon = {icon} style = {styles.menu__item} />
          )
        })}
      </ul>
    </nav>
  )
}