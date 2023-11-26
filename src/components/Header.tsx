import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { metadata } from '@/shared/data';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

export default function Header() {
  const BREAKPOINT: number = 768;
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const windowInnerSize = useSelector(
    (state: RootState) => state.innerWindowSize
  );

  const toggleMenu = (): void => setIsMenu((current) => !current);

  useEffect((): void => {
    windowInnerSize.width > BREAKPOINT ? setIsMenu(true) : setIsMenu(false);
  }, [windowInnerSize]);

  return (
    <header
      className={
        'w-full z-50 h-[42px] fixed top-0 left-0  backdrop-blur-md bg-transparent py-3 px-4 font-medium text-[.95rem]'
      }>
      <div className='w-full mx-auto xl:max-w-[1200px]'>
        <AnimatePresence>
          {isMenu ? (
            <motion.nav
              role='main'
              initial={{ translateY: -70 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.25 }}
              exit={{
                opacity: 0,
                translateY: -70,
                transition: { duration: 0.25 }
              }}
              style={{ display: isMenu ? 'flex' : 'none' }}
              className='w-full h-full relative flex flex-col md:flex-row items-center justify-between gap-5 bg-foreground p-4 pt-10 rounded-lg -top-2 md:rounded-none md:p-0 md:static md:bg-transparent text-[.95rem]'>
              <div className='w-fit flex flex-col md:flex-row items-center gap-4 '>
                <Link to={'/'} className='base-link'>
                  <span>Overview</span>
                </Link>
                <Link to={'/'} className='base-link'>
                  <span>Delivery</span>
                </Link>
                <Link to={'/'} className='base-link'>
                  <span>Health & Safety</span>
                </Link>
              </div>

              <div className='w-fit flex flex-col md:flex-row items-center gap-2'>
                <Link to={'/'} className='base-link'>
                  <span>Services</span>
                </Link>
                <Link to={'/'} className='base-link'>
                  <span>Offers</span>
                </Link>
                <Link to={'/'} className='base-link'>
                  <span>Menu</span>
                </Link>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>

        <div className='absolute top-2 left-10 md:left-[calc(50%_-_20px)] w-fit flex flex-col md:flex-row items-center gap-2'>
          <Link to={'/'} className='base-link'>
            <span className='text-lg font-semibold'>{metadata.appName}</span>
          </Link>
        </div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          title={`${isMenu ? 'Close menu drawer' : 'Open menu drawer'}`}
          className={clsx(
            'base-corner-button fixed top-2 right-5 border-none  md:hidden',
            {
              'bg-primary_a-light dark:bg-primary_a-dark ': isMenu
            }
          )}
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
