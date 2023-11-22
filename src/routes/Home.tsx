import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { _home as Container } from '@/styles/routes/_home';
import sampleImage00 from '../assets/dishes/00.jpg';
import sampleImage01 from '../assets/dishes/01.jpg';
import sampleImage02 from '../assets/dishes/02.jpg';
// import sampleImage03 from '../assets/dishes/03.jpg'
import sampleImage04 from '../assets/dishes/04.jpg';
import sampleImage05 from '../assets/dishes/05.jpg';
import sampleImage06 from '../assets/dishes/06.jpg';
import sampleImage07 from '../assets/dishes/07.jpg';
import sampleImage08 from '../assets/dishes/08.jpg';
import sampleImage09 from '../assets/dishes/09.jpg';
import sampleImage10 from '../assets/dishes/10.jpg';
import { categoryRoutes, recipeTypes, personPhotos } from '@/shared/data';

export default function Home() {
  return (
    <Layout renderHeader renderFooter>
      <Container>
        <article>
          <section className='title-container'>
            <div className='wrapper-container'>
              <h1>Simple and Taste Recipes</h1>

              <section className='showcase-container'>
                <img src={sampleImage00} alt='plate 00 image' />

                <div className='principal-dish-container'>
                  <div>
                    <p>01 - Explore Dishes</p>
                  </div>
                  <div>
                    {personPhotos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`User ${index + 1} photo`}
                        loading='lazy'
                        decoding='async'
                      />
                    ))}
                  </div>
                  <div>
                    <p>
                      Our restaurant is a place that prepares and serves food
                      and drinks to customers. Meals are generally served and
                      eaten on the premisses.
                    </p>
                  </div>
                  <div>
                    <img
                      src={sampleImage01}
                      alt={`plate 01 image`}
                      loading='lazy'
                      decoding='async'
                    />
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className='categories-container'>
            <div className='top-container'>
              <div className='right-side-container'>
                <h1>Experience of real recipes taste</h1>

                <hr className='separator-ruler' />

                <section>
                  <div>
                    <img
                      src={sampleImage02}
                      alt={`plate 02 image`}
                      loading='lazy'
                      decoding='async'
                    />
                    <p>
                      But our menu doesnt stop on the breackfast. We also offer
                      a wide range of kebab plates.
                    </p>
                  </div>

                  <Link to={'/'}>
                    <span>View all</span>
                  </Link>
                </section>
              </div>
              <img
                src={sampleImage04}
                alt={`plate 04 image`}
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className='bottom-container'>
              <div className='title-container'>
                <p>02</p>
                <h2>Our categories</h2>
                <p>
                  All grilled to perfection over charcoal our dips and sauces
                </p>
              </div>
              <div className='routes-wrapper'>
                <img
                  src={sampleImage05}
                  alt={`plate 05 image`}
                  loading='lazy'
                  decoding='async'
                />
                <div className='routes-container'>
                  {categoryRoutes.map((route, index) => (
                    <Link key={index} to={route.url}>
                      <span>{route.name}</span>
                    </Link>
                  ))}
                </div>
                <img
                  src={sampleImage06}
                  alt={`plate 06 image`}
                  loading='lazy'
                  decoding='async'
                />
              </div>
              <div className='after-word-container'>
                <p>
                  We understand that every event is unique and we work closely
                  to you to customize catering menu to suit your specific needs.
                </p>
                <img
                  src={sampleImage07}
                  alt={`plate 07 image`}
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </div>
          </section>
          <section className='view-container'>
            <h1>View all latest dishes</h1>
            <div className='content-container'>
              {recipeTypes.map((element, index) => (
                <div key={index}>
                  <p>{element.description}</p>
                  <Link to={'/'}>
                    <span>{element.type}</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className='explore-container'>
            <h1>Explore real taste</h1>
            <p>
              We offer a variety of homemade pastries and sweets, including the
              almond-topped semolina called harissa and the indulgent kunafe
              topped with pistachios.
            </p>

            <section className='dishes-wrapper'>
              <div className='dish-container'>
                <img
                  src={sampleImage08}
                  alt={`plate 08 image`}
                  loading='lazy'
                  decoding='async'
                />
                <div>
                  <h2>Hearty breakfast</h2>
                  <p>
                    Which includes dishes like fatteh hummus loaded with almonds
                  </p>
                </div>
              </div>
              <img
                src={sampleImage10}
                alt={`plate 10 image`}
                loading='lazy'
                decoding='async'
              />
              <div className='dish-container'>
                <img
                  src={sampleImage09}
                  alt={`plate 09 image`}
                  loading='lazy'
                  decoding='async'
                />
                <div>
                  <h2>For vegetarian</h2>
                  <p>
                    You'll find something to love on our breakfast menu. Vegan
                    is the way!
                  </p>
                </div>
              </div>
            </section>
          </section>
        </article>
      </Container>
    </Layout>
  );
}
