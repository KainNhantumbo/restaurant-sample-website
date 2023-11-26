import Header from './Header';
import Footer from './Footer';
import { lazy, Suspense, type ReactNode } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
  renderHeader?: boolean;
  renderFooter?: boolean;
}

const Cookies = lazy(() => import('./Cookies'));

function Layout({ children, renderHeader, renderFooter }: Props) {
  return (
    <MotionConfig reducedMotion='user'>
      <LazyMotion strict={true} features={domAnimation}>
        {renderHeader ? <Header /> : null}
        <Suspense>
          <Cookies />
        </Suspense>
        {children}
        {renderFooter ? <Footer /> : null}
      </LazyMotion>
    </MotionConfig>
  );
}

export default Layout;
