import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import { _cookies as Container } from '@/styles/modules/_cookies';
import { RiCloseLine, RiLoader2Line } from 'react-icons/ri';

export default function Cookies() {
  const [isPopupActive, setIsPopupActive] = useState<boolean>(false);

  // controls the life cicle of the component
  const advisorController = () => {
    setIsPopupActive(() => false);
    localStorage.setItem('cookies_warning', JSON.stringify('false'));
  };

  useEffect(() => {
    const advisorState = JSON.parse(
      localStorage.getItem('cookies_warning') || 'false'
    );

    if (!advisorState) {
      localStorage.setItem('cookies_warning', JSON.stringify('true'));
      setIsPopupActive(() => true);
    }
    if (advisorState === 'true') {
      setIsPopupActive(() => true);
    } else {
      setIsPopupActive(() => false);
    }
  }, []);

  return (
    <AnimatePresence>
      {isPopupActive && (
        <Container>
          <motion.section
            initial={{ opacity: 0, y: 500 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.2 }
            }}
            exit={{
              opacity: 0,
              y: 500,
              transition: { duration: 1.2 }
            }}
            className='main-container'>
            <section className='modal-container'>
              <h1>
                <RiLoader2Line />
                <span>Your privacy matters</span>
              </h1>

              <button className='base-corner-button border-none p-0 absolute top-3 right-3 hover:text-error-light' onClick={advisorController}>
                <RiCloseLine />
              </button>

              <div className='options-container'>
                <div>
                  <h2>Color Schemes</h2>
                  <p>
                    We store a cookie for seamless colors scheme preferences.
                  </p>
                </div>
                <div>
                  <h2>Purpose</h2>
                  <p>
                    Cookies enhance your experience and remember preferencies.
                  </p>
                </div>
                <div>
                  <h2>Control</h2>
                  <p>
                    Clear cookies in your browser but may affect your
                    experience.
                  </p>
                </div>
              </div>

              <div className='actions-container'>
                <Link to='/docs/privacy-policy'>
                  <strong>Learn more</strong>
                </Link>
                <button className='base-button' onClick={advisorController}>
                  <span>Accept and close</span>
                </button>
              </div>
            </section>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
