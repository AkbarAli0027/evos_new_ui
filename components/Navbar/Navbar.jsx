import { useState } from 'react'
import cls from './Navbar.module.scss'
import { Box } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import Login from '../Login/Login'
import { ExpandIcon } from '../Icons'

export default function Navbar() {
  const { pathname, locale } = useRouter()
  const [openLogin, setOpenDialog] = useState(false)

  const handleCloseLogin = () => setOpenDialog(false)

  return (
    <>
      <Box className={cls.root}>
        <div className={cls.footerBox}>
          <ul className={cls.footerList}>
            
            {/* 1. Biz haqimizda Dropdown */}
            <li className={cls.navItem}>
              <div className={cls.lang}>
                <Link href='/about'>
                  <a className={`${cls.anchorTag} ${pathname.includes('/about') ? cls.activeLink : ''}`}>
                    {menu[locale].abouts}
                  </a>
                </Link>
                <div className={cls.expandIcon}>
                  <ExpandIcon />
                </div>
                <div className={cls.wrapper}>
                  <ul className={cls.langList}>
                    <li className={cls.listLink}>
                      <Link href='/news'>
                        <a className={`${cls.anchorTag} ${pathname.includes('/news') ? cls.activeLink : ''}`}>
                          {menu[locale].news}
                        </a>
                      </Link>
                    </li>
                    <li className={cls.listLink}>
                      <Link href='/contacts'>
                        <a className={`${cls.anchorTag} ${pathname === '/contacts' ? cls.activeLink : ''}`}>
                          {menu[locale].contacts}
                        </a>
                      </Link>
                    </li>
                    <li className={cls.listLink}>
                      <Link href='/about/gallery/gallery-item/#gallery'>
                        <a className={`${cls.anchorTag} ${pathname === '/about/gallery' ? cls.activeLink : ''}`}>
                          {menu[locale].certificates}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* 2. Filiallar */}
            <li className={cls.navItem}>
              <Link href='/branches'>
                <a className={`${cls.anchorTag} ${pathname.includes('/branches') ? cls.activeLink : ''}`}>
                  {menu[locale].branches}
                </a>
              </Link>
            </li>

            {/* 3. Vakantlar */}
            <li className={cls.navItem}>
              <Link href='/vacancy'>
                <a className={`${cls.anchorTag} ${pathname.includes('/vacancy') ? cls.activeLink : ''}`}>
                  {menu[locale].vacancies}
                </a>
              </Link>
            </li>

            {/* 4. Table Service */}
            <li className={cls.navItem}>
              <Link href='/table-service'>
                <a className={`${cls.anchorTag} ${pathname === '/table-service' ? cls.activeLink : ''}`}>
                  {menu[locale].tableService}
                </a>
              </Link>
            </li>

            {/* 5. Kids Dropdown - To'g'irlangan struktura */}
            <li className={cls.kidsWrapper}>
              <div className={cls.kidsContent}>
                <Link href='/kids'>
                  <a className={cls.kids}>kids</a>
                </Link>
                
                <div className={cls.wrapper}>
                  <div className={cls.langList}>
                    <li className={cls.listLink}>
                      <Link href='/kids/playgrounds/'>
                        <a className={`${cls.content} ${pathname.includes('/kids/playgrounds') ? cls.content__red : ''} ${cls.content__red}`}>
                          {menu[locale].playground}
                        </a>
                      </Link>
                    </li>
                    <li className={cls.listLink}>
                      <Link href='/kids/aquagrim/'>
                        <a className={`${cls.content} ${pathname.includes('/kids/aquagrim') ? cls.content__green : ''} ${cls.content__green}`}>
                          {menu[locale].aquagrim}
                        </a>
                      </Link>
                    </li>
                    <li className={cls.listLink}>
                      <Link href='/kids/events/'>
                        <a className={`${cls.content} ${pathname.includes('/kids/events') ? cls.content__yellow : ''} ${cls.content__yellow}`}>
                          {menu[locale].events}
                        </a>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </Box>

      <Login open={openLogin} onClose={handleCloseLogin} setOpenLoginDialog={setOpenDialog} />
    </>
  )
}


// import { useState } from 'react'
// import cls from './Navbar.module.scss'
// import { Box } from '@mui/material'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { menu } from '../../mock/menu'
// import Login from '../Login/Login'
// import { ExpandIcon } from '../Icons'

// export default function Navbar() {
//   const { pathname, locale } = useRouter()
//   const [openLogin, setOpenDialog] = useState(false)
//   const [anchorMainMenu, setAnchorMainMenu] = useState(null)
//   const [anchorKidsMenu, setAnchorKidsMenu] = useState(null)

//   const openMainMenu = Boolean(anchorMainMenu)
//   const openKidsMenu = Boolean(anchorKidsMenu)
//   const idMainMenu = openMainMenu ? 'simple-popover' : undefined
//   const idKidsMenu = openKidsMenu ? 'simple-popover' : undefined

//   const handleMainMenu = (event) => {
//     setAnchorMainMenu(event.currentTarget)
//   }
//   const handleKidsMenu = (event) => {
//     setAnchorKidsMenu(event.currentTarget)
//   }

//   const handleCloseLogin = () => {
//     setOpenDialog(false)
//   }

//   return (
//     <>
//       <Box className={cls.root}>
//         <div className={cls.footerBox}>
//           <ul className={cls.footerList}>
//             {/* Biz haqimizda dropdown */}
//             <li>
//               <div
//                 className={cls.lang}
//                 aria-describedby={idMainMenu}
//                 onClick={handleMainMenu}
//               >
//                 <Link href='/about'>
//                   <a
//                     style={{ color: 'black', fontWeight: '400' }}
//                     className={` ${cls.anchorTag}  ${pathname.includes('/about') ? cls.activeLink : ''
//                       }`}
//                   >
//                     {menu[locale].abouts}
//                   </a>
//                 </Link>
//                 <div className={cls.expandIcon}>
//                   <ExpandIcon />
//                 </div>
//                 <div className={cls.wrapper}>
//                   <div className={cls.langList}>
//                     {/* News */}
//                     <li className={cls.listLink}>
//                       <Link href='/news'>
//                         <a
//                           className={`${cls.anchorTag} ${pathname.includes('/news') ? cls.activeLink : ''
//                             }`}
//                         >
//                           {menu[locale].news}
//                         </a>
//                       </Link>
//                     </li>

//                     {/* Contacts */}
//                     <li className={cls.listLink}>
//                       <Link href='/contacts'>
//                         <a
//                           className={`${cls.anchorTag} ${pathname === '/contacts' ? cls.activeLink : ''
//                             }`}
//                         >
//                           {menu[locale].contacts}
//                         </a>
//                       </Link>
//                     </li>

//                     {/* Certificates */}
//                     <li className={cls.listLink}>
//                       <Link href='/about/gallery/gallery-item/#gallery'>
//                         <a
//                           className={`${cls.anchorTag} ${pathname === '/about/gallery' ? cls.activeLink : ''
//                             }`}
//                         >
//                           {menu[locale].certificates}
//                         </a>
//                       </Link>
//                     </li>

//                     {/* Filiallar */}
//                     <li className={cls.listLink}>
//                       <Link href='/branches'>
//                         <a
//                           className={`${cls.anchorTag} ${pathname.includes('/branches') ? cls.activeLink : ''
//                             }`}
//                         >
//                           {menu[locale].branches}
//                         </a>
//                       </Link>
//                     </li>



//                     {/* Vakantlar */}
//                     <li className={cls.listLink}>
//                       <Link href='/vacancy'>
//                         <a
//                           className={`${cls.anchorTag} ${pathname.includes('/vacancy') ? cls.activeLink : ''
//                             }`}
//                         >
//                           {menu[locale].vacancies}
//                         </a>
//                       </Link>
//                     </li>




//                     {/* Table Service */}
//                     <li className={cls.listLink}>
//                       <Link href='/table-service'>
//                         <a
//                           className={`${cls.anchorTag} ${pathname === '/table-service' ? cls.activeLink : ''
//                             }`}
//                         >
//                           {menu[locale].tableService}
//                         </a>
//                       </Link>
//                     </li>

//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* Kids alohida dropdown */}
//             <li className={cls.kidsWrapper}>
//               <div aria-describedby={idKidsMenu} onClick={handleKidsMenu}>
//                 <Link href={'/kids'}>
//                   <a className={cls.kids}>kids</a>
//                 </Link>
//                 <div className={cls.wrapper}>
//                   <div className={cls.langList}>
//                     {/* <li className={cls.listLink}>
//                       <Link href='/kids/playgrounds/'>
//                         <a
//                           className={`${cls.content} ${pathname.includes('/kids/playgrounds')
//                             ? cls.content__red
//                             : ''
//                             }`}
//                         >
//                           {menu[locale].playground}
//                         </a>
//                       </Link>
//                     </li> */}

//                     <li className={cls.listLink}>
//                       <Link href='/kids/playgrounds/'>
//                         <a
//                           className={`${cls.content} ${pathname.includes('/kids/playgrounds')
//                             ? cls.content__red
//                             : ''
//                             }`}
//                         >
//                           {menu[locale].playground}
//                         </a>
//                       </Link>
//                     </li>
//                     <li className={cls.listLink}>
//                       <Link href='/kids/aquagrim/'>
//                         <a
//                           className={`${cls.content} ${pathname.includes('/kids/aquagrim')
//                             ? cls.content__green
//                             : ''
//                             }`}
//                         >
//                           {menu[locale].aquagrim}
//                         </a>
//                       </Link>
//                     </li>
//                     <li className={cls.listLink}>
//                       <Link href='/kids/events/'>
//                         <a
//                           className={`${cls.content} ${pathname.includes('/kids/events')
//                             ? cls.content__yellow
//                             : ''
//                             }`}
//                         >
//                           {menu[locale].events}
//                         </a>
//                       </Link>
//                     </li>
           
//                   </div>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </Box>

//       {/* Login Modal */}
//       <Login
//         open={openLogin}
//         onClose={handleCloseLogin}
//         setOpenLoginDialog={setOpenDialog}
//       />
//     </>
//   )
// }