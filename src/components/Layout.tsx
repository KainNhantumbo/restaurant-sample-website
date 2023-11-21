import Header from './Header';
import Footer from './Footer';
import Cookies from './Cookies';
import type { ReactNode } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
  renderHeader?: boolean;
  renderFooter?: boolean;
}

function Layout({ children, renderHeader, renderFooter }: Props) {
  return (
    <MotionConfig reducedMotion='user'>
      <LazyMotion strict={true} features={domAnimation}>
        {renderHeader ? <Header /> : null}
        <Cookies />
        {children}
        {renderFooter ? <Footer /> : null}
      </LazyMotion>
    </MotionConfig>
  );
}

export default Layout;
