import { Link } from 'react-router-dom';
import { footerAnchors, metadata } from '../shared/data';

export default function Footer() {
  return (
    <footer className='group flex flex-col gap-2 w-[100%] p-3 bg-primary_b '>
      <h1 className=''>Let's connect with us</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='email' />
        <button type='submit'>
          <span>Subscribe now</span>
        </button>
      </form>

      <section className='root-container'>
        <div className='brand-container'>
          <h2>iMeat</h2>
          <p>
            Our restaurant is a place where everyone can feel the pleasure of
            having a breathe of taste
          </p>
        </div>
        <nav>
          {footerAnchors.map((items, index) => (
            <section key={index} className='columns-container-wrapper'>
              {items.map((element, index) => (
                <Link key={index.toString()} to={element.url}>
                  <span>{element.name}</span>
                </Link>
              ))}
            </section>
          ))}
        </nav>
      </section>

      <p className='copyright-sentence'>{metadata.copyright}</p>
    </footer>
  );
}
