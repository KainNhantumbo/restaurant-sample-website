import Layout from '@/components/Layout';
import { _home as Container } from '@/styles/routes/_home';
import { Link } from 'react-router-dom';

export default function Home() {
  const usersPhotos = ['', '', '', ''];

  const recipeTypes: Array<{ type: string; description: string }> = [
    {
      type: 'Asiatic',
      description: 'We also offer a wide range of kebab plates, including lamb.'
    },
    {
      type: 'Japanese',
      description: 'The perfect complement to any meal and for dessert.'
    },
    {
      type: 'Italian',
      description: 'At Ottawa Kebab, we strive to create a wram and welcoming.'
    },
    {
      type: 'Chinese',
      description: 'Our dips and sauces, including smoky baba ganoush.'
    }
  ];

  const categoryRoutes: Array<{ name: string; url: string }> = [
    { name: 'Adana Kebab, Lamb and Beef', url: '/' },
    { name: 'White Beans okra with Lamb Shank', url: '/' },
    { name: 'Mondi with Lamb shank Delimia', url: '/' },
    { name: 'Black Beans with Lamb Shank', url: '/' },
    { name: 'Stuffed grape leaves with Lamb Shank', url: '/' }
  ];

  return (
    <Layout renderHeader renderFooter>
      <Container>
        <article>
          <section className='title-container'>
            <div className='wrapper-container'>
              <h1>Simple and Taste Recipes</h1>

              <section className='showcase-container'>
                <img src='/' alt='plate 00 image' />

                <div className='principal-dish-container'>
                  <div>
                    <p>01 - Explore Dishes</p>
                  </div>
                  <div>
                    {usersPhotos.map((image, index) => (
                      <img
                        key={index}
                        src={image}
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
                      src={''}
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
                      src={''}
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
                src={''}
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
                  src={''}
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
                  src={''}
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
                  src={''}
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
                  src={''}
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
                src={''}
                alt={`plate 10 image`}
                loading='lazy'
                decoding='async'
              />
              <div className='dish-container'>
                <img
                  src={''}
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
