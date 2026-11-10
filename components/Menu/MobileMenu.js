import React, { createRef, useState } from 'react'
import cls from './MobileMenu.module.scss'
import { Link } from 'react-scroll'

function MobileMenu({ menu }) {
  const [categoriesRef] = useState(menu?.map((_, index) => (_ = createRef())))

  const scrollToCategory = (index) => {
    categoriesRef[index]?.current?.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    })
  }

  return (
    <div className={cls.root}>
      <div className={cls.menuListTop}>
        <ul className={cls.list}>
          {menu.map((item, index) => (
            <li key={item.id} className={cls.listItem}>
              <Link
                activeClass={cls.active}
                to={item.id.toString()}
                spy={true}
                offset={-80}
                onSetActive={() => scrollToCategory(index)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
