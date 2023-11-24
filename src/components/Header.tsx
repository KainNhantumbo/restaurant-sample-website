import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { _header as Container } from '../styles/modules/_header';
import { Link } from 'react-router-dom';
import { RiCloseLine, RiMenu2Line, RiMenu3Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { metadata } from '@/shared/data';

export default function Header() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const windowInnerSize = useSelector(
    (state: RootState) => state.innerWindowSize
  );

  const toggleMenu = (): void => setIsMenu((current) => !current);

  useEffect((): void => {
    windowInnerSize.width > 770 ? setIsMenu(true) : setIsMenu(false);
    console.log(windowInnerSize);
  }, [windowInnerSize]);

  return (
    <header className='w-full h-12 fixed top-0 left-0 backdrop-blur-sm bg-transparent py-3 px-2 font-medium text-[.95rem]'>
      <div className='w-full mx-auto xl:max-w-[1200px]  '>
        <AnimatePresence>
          {isMenu && (
            <motion.nav
              initial={{ translateY: -70 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.25 }}
              exit={{
                opacity: 0,
                translateY: -70,
                transition: { duration: 0.25 }
              }}
              style={{ display: isMenu ? 'flex' : 'none' }}
              className='w-full h-full relative top-[-8px] left-[180px] flex justify-between items-center gap-5 text-[.95rem]'>
              <div className='flex items-center'>
                <Link to={'/'}>
                  <span>Overview</span>
                </Link>
                <Link to={'/'}>
                  <span>Health & Safety</span>
                </Link>
              </div>

              <div className='left-corner-container'>
                <Link to={'/'}>
                  <span>Services</span>
                </Link>
                <Link to={'/'}>
                  <span>Offers</span>
                </Link>
                <Link to={'/'}>
                  <span>Menu</span>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        <div className='brand-container'>
          <h1>
            <Link to={'/'}>
              <span>{metadata.appName}</span>
            </Link>
          </h1>
        </div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          title={`${isMenu ? 'Close menu drawer' : 'Open menu drawer'}`}
          className={clsx('base-corner-button', {
            'toggle-btn_active': isMenu
          })}
          onClick={toggleMenu}>
          {!isMenu ? (
            <RiMenu3Line
              className={
                'stroke-font-light dark:stroke-font-dark w-5 h-5 pointer-events-none'
              }
            />
          ) : (
            <RiCloseLine
              className={
                'stroke-font-light dark:stroke-font-dark w-5 h-5 pointer-events-none'
              }
            />
          )}
        </motion.button>
      </div>
    </header>
  );
}
