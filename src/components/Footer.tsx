import { Link } from 'react-router-dom';
import { footerAnchors, metadata } from '../shared/data';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-4 w-[100%] p-3 mobile:p-8 pt-4 bg-background '>
      <h1 className='w-[100%] text-xl mobile:text-3xl sm:text-4xl md:text-6xl font-[500] text-center font-sans-serif'>
        Let's connect with us
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-[100%] flex flex-row mt-3 gap-4 items-center justify-center'>
        <input
          type='email'
          className='inputs '
          placeholder='Enter your e-mail'
        />
        <button
          type='submit'
          className='base-button text-white-light transition-colors'>
          <span className='pointer-events-none'>Subscribe now</span>
        </button>
      </form>

      <section className='w-[100%] max-w-[980px] flex flex-col-reverse items-center mobile-x:flex-row gap-5 mx-auto'>
        <div className=' flex flex-col gap-3'>
          <h2 className='text-3xl'>iMeat</h2>
          <p className='text-sm max-w-[220px]'>
            Our restaurant is a place where everyone can feel the pleasure of
            having a breathe of taste
          </p>
        </div>

        <nav className='w-[100%] flex flex-wrap flex-col mobile-x:flex-row gap-8 items-center md:justify-evenly'>
          {footerAnchors.map((items, index) => (
            <section key={index} className='flex flex-col gap-3 '>
              {items.map((element, index) => (
                <Link
                  key={index.toString()}
                  to={element.url}
                  className='hover:text-primary_b text-center sm:text-left dark:hover:text-primary_b-dark transition-colors'>
                  <span>{element.name}</span>
                </Link>
              ))}
            </section>
          ))}
        </nav>
      </section>

      <p className='w-[100%] pt-5 border-t-[1px] border-solid border-font-light dark:border-font-dark border-opacity-20 text-center'>
        {metadata.copyright}
      </p>
    </footer>
  );
}
