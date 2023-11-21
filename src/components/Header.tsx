import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { _header as Container } from '../styles/modules/_header';
import { Link } from 'react-router-dom';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
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
  }, [windowInnerSize]);

  return (
    <Container>
      <div className='wrapper'>
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
              style={{ display: isMenu ? 'flex' : 'none' }}>
              <div className='right-corner-container'>
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
          className={clsx('toggle-btn', { 'toggle-btn_active': isMenu })}
          onClick={toggleMenu}>
          {!isMenu ? <RiMenu2Line /> : <RiCloseLine />}
        </motion.button>
      </div>
    </Container>
  );
}
