import ThemeContext from './ThemeContext';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSizes } from '@/state/slices/innerWindowSizeSlice';

type Props = { children: ReactNode };

export default function AppContext({ children }: Props) {
  const dispatch = useDispatch();

  const computeInnerWindowSize = (): void => {
    dispatch(
      updateSizes({
        width: Number(window.innerWidth.toFixed(0)),
        height: Number(window.innerHeight.toFixed(0))
      })
    );
  };

  useEffect(() => {
    computeInnerWindowSize();
    window.addEventListener('resize', computeInnerWindowSize);
    return () => {
      window.removeEventListener('resize', computeInnerWindowSize);
    };
  }, []);

  return <ThemeContext>{children}</ThemeContext>;
}
