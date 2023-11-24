import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import sampleImage00 from '../assets/dishes/00.jpg';
import sampleImage01 from '../assets/dishes/01.jpg';
import sampleImage02 from '../assets/dishes/02.jpg';
import sampleImage03 from '../assets/dishes/03.jpg';
import sampleImage04 from '../assets/dishes/04.jpg';
import sampleImage05 from '../assets/dishes/05.jpg';
import sampleImage06 from '../assets/dishes/06.jpg';
import sampleImage08 from '../assets/dishes/08.jpg';
import sampleImage09 from '../assets/dishes/09.jpg';
import sampleImage10 from '../assets/dishes/10.jpg';
import { categoryRoutes, recipeTypes, personPhotos } from '@/shared/data';
import { RiShareCircleLine } from 'react-icons/ri';

export default function Home() {
  return (
    <Layout renderHeader renderFooter>
      <main className='w-[100%] pt-[70px]'>
        <article className='w-[100%]'>
          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'>
            <div className='w-[100%] flex flex-col gap-4'>
              <h1 className='w-[100%] text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-[500] text-center font-sans-serif uppercase inline  '>
                Simple and Tasty Recipes
              </h1>

              <section className='w-[100%] flex flex-col sm:flex-row items-center gap-8 justify-between mb-3'>
                <img
                  src={sampleImage00}
                  alt='plate 00 image'
                  className='base-image max-w-[160px] max-h-[160px] sm:max-w-[190px] sm:max-h-[190px]'
                />

                <div className='w-[100%] flex flex-col gap-4 mobile-x:gap-8 items-center'>
                  <p className='text-xl text-center sm:text-left font-semibold whitespace-nowrap'>
                    01 - Explore Dishes
                  </p>
                  <p className='w-[100%] max-w-[400px] text-center '>
                    Our restaurant is a place that prepares and serves food and
                    drinks to customers. Meals are generally served and eaten on
                    the premisses.
                  </p>
                </div>
                <img
                  src={sampleImage03}
                  alt={`plate 01 image`}
                  loading='lazy'
                  decoding='async'
                  className='base-image max-w-[160px] max-h-[160px] sm:max-w-[190px] sm:max-h-[190px] '
                />
              </section>
            </div>
          </section>

          <div className='w-[100%] bg-foreground-light dark:bg-foreground-dark py-6 '>
            <section className='w-[100%] max-w-[960px] mx-auto flex flex-col items-center gap-14 justify-center p-4'>
              <div className='w-[100%] flex flex-col mobile-x:flex-row justify-between items gap-6'>
                <div className='w-[100%] max-w-[500px] flex flex-col justify-between gap-6'>
                  <h1 className='w-[100%] max-w-[500px] text-3xl sm:text-4xl md:text-6xl font-[500] font-sans-serif'>
                    Experience of real recipes taste
                  </h1>

                  <section className='flex justify-between items-center gap-3 pt-4 border-solid border-t-[3px] border-font-light dark:border-font-dark'>
                    <div className='flex gap-3 items-center'>
                      <img
                        src={sampleImage02}
                        alt={`plate 02 image`}
                        loading='lazy'
                        decoding='async'
                        className='base-image border-solid border-primary_a border-[3px] max-w-[60px] max-h-[60px]'
                      />
                      <p className='w-[100%] max-w-[360px]'>
                        But our menu doesnt stop on the breackfast. We also
                        offer a wide range of kebab plates.
                      </p>
                    </div>

                    <Link
                      to={'/'}
                      className='hover:text-primary_b underline whitespace-nowrap font-semibold underline-offset-2 text-center sm:text-left dark:hover:text-primary_b-dark transition-colors'>
                      View all
                    </Link>
                  </section>
                </div>

                <img
                  src={sampleImage04}
                  alt={`plate 04 image`}
                  loading='lazy'
                  decoding='async'
                  className='base-image hidden mobile-x:block max-w-[160px] max-h-[160px]  md:max-w-[260px] md:max-h-[260px] '
                />
              </div>

              <div className='w-[100%] flex flex-col items-center gap-12'>
                <div className='w-[100%] max-w-[800px] flex flex-col sm:flex-row justify-around items-center gap-4 mx-auto'>
                  <p className='w-[100%] max-w-[20px] text-xl font-semibold'>
                    02
                  </p>
                  <h2 className='w-[100%] text-3xl sm:text-4xl md:text-6xl font-[500] text-center font-sans-serif'>
                    Our categories
                  </h2>
                  <p className='w-[100%] sm:text-left sm:max-w-[160px] sm:text-sm text-center text-xl'>
                    All grilled to perfection over charcoal our dips and sauces
                  </p>
                </div>

                <div className='w-[100%] flex flex-col sm:flex-row mobile-x:justify-between items-center gap-10 sm:gap-4 py-4'>
                  <img
                    src={sampleImage05}
                    alt={`plate 05 image`}
                    loading='lazy'
                    decoding='async'
                    className='base-image max-w-[160px] max-h-[160px] sm:max-w-[190px] sm:max-h-[190px]'
                  />
                  <div className='w-[100%] flex flex-col items-center gap-5'>
                    {categoryRoutes.map((route, index) => (
                      <Link
                        key={index}
                        to={route.url}
                        className='w-[100%] max-w-[320px] font-semibold border-b-2 flex flex-row items-center justify-between border-font-light dark:border-font-dark '>
                        <span>{route.name}</span>
                        <RiShareCircleLine />
                      </Link>
                    ))}
                  </div>
                  <img
                    src={sampleImage09}
                    alt={`plate 06 image`}
                    loading='lazy'
                    decoding='async'
                    className='base-image max-w-[160px] max-h-[160px] sm:max-w-[190px] sm:max-h-[190px]'
                  />
                </div>

                <p className='w-[100%] max-w-[600px] font-semibold text-center'>
                  We understand that every event is unique and we work closely
                  to you to customize catering menu to suit your specific needs.
                </p>
              </div>
            </section>
          </div>

          <section className='w-[100%] flex flex-col gap-4 pt-8 items-center'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl font-[500] text-center font-sans-serif'>
              View all latest dishes
            </h1>

            <div className='w-[100%] max-w-[980px] flex flex-row flex-wrap justify-center items-center gap-8 p-8'>
              {recipeTypes.map((element, index) => (
                <div
                  key={index}
                  className='w-[100%] max-w-[200px] flex flex-col items-center gap-5'>
                  <p>{element.description}</p>
                  <Link
                    to={'/'}
                    className='w-[100%] max-w-[200px] font-semibold border-b-2 flex flex-row items-center justify-between border-font-light dark:border-font-dark'>
                    <span>{element.type}</span>
                    <RiShareCircleLine />
                  </Link>
                </div>
              ))}
            </div>

            <div className='w-[100%] flex flex-row flex-wrap items-center justify-center'>
              <img
                src={sampleImage01}
                alt={`plate 10 image`}
                loading='lazy'
                decoding='async'
                className='base-image max-w-[220px] p-8  max-h-[220px] mt-4'
              />
              <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-row'>
                  {personPhotos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`User ${index + 1} photo`}
                      loading='lazy'
                      decoding='async'
                      style={{
                        position: 'relative',
                        left: index > 0 ? `-${index * 5}px` : '0',
                        zIndex: index > 0 ? `${index}px` : `${index * 10}`
                      }}
                      className={
                        'base-image max-w-[35px] max-h-[35px] ring-white ring-2 border-solid border-white'
                      }
                    />
                  ))}
                </div>
                <p className='font-semibold text-center'>
                  Ranked 1# choice restaurant from our customers
                </p>
              </div>
            </div>
          </section>

          <div className='w-[100%] bg-foreground-light dark:bg-foreground-dark '>
            <section className='w-[100%] max-w-[960px] mx-auto flex flex-col items-center gap-14 justify-center p-4'>
              <h1 className='text-3xl sm:text-4xl md:text-6xl font-[500] text-center font-sans-serif pt-4'>
                Explore real taste
              </h1>
              <p className='w-[100%] max-w-[600px] font-semibold text-center'>
                We offer a variety of homemade pastries and sweets, including
                the almond-topped semolina called harissa and the indulgent
                kunafe topped with pistachios.
              </p>

              <section className='w-[100%] flex flex-wrap flex-row justify-around items-center gap-4'>
                <div className='w-[100%] max-w-[200px] flex flex-col items-center gap-4'>
                  <img
                    src={sampleImage10}
                    alt={`plate 10 image`}
                    loading='lazy'
                    decoding='async'
                    className='base-image max-w-[120px] max-h-[120px]'
                  />
                  <div>
                    <h2 className='text-lg text-center font-semibold'>
                      Hearty breakfast
                    </h2>
                    <p className='text-sm text-center'>
                      Which includes dishes like fatteh hummus loaded with
                      almonds
                    </p>
                  </div>
                </div>
                <div className='w-[100%] max-w-[200px] flex flex-col items-center gap-4'>
                  <img
                    src={sampleImage08}
                    alt={`plate 08 image`}
                    loading='lazy'
                    decoding='async'
                    className='base-image max-w-[120px] max-h-[120px]'
                  />
                  <div>
                    <h2 className='text-lg text-center font-semibold'>
                      Backed Smoothly
                    </h2>
                    <p className='text-sm text-center'>
                      Savor foreign touches in every bite, a culinary experience
                      that worms the heart and fills the stomach
                    </p>
                  </div>
                </div>

                <div className='w-[100%] max-w-[200px] flex flex-col items-center gap-4'>
                  <img
                    src={sampleImage06}
                    alt={`plate 09 image`}
                    loading='lazy'
                    decoding='async'
                    className='base-image max-w-[120px] max-h-[120px]'
                  />
                  <div>
                    <h2 className='text-lg font-semibold text-center'>
                      For vegetarian
                    </h2>
                    <p className='text-sm text-center'>
                      You'll find something to love on our breakfast menu. Vegan
                      is the way!
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </article>
      </main>
    </Layout>
  );
}
