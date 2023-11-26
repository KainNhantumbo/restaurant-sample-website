import { BeatLoader } from 'react-spinners';

export default function Loader() {
  return (
    <section className='w-full h-full flex flex-col font-medium gap-5 items-center p-[calc(25%_-_1px)] text-lg'>
      <h3>Backing your dishes...</h3>
      <BeatLoader
        color='#E3C49A'
        cssOverride={{
          display: 'block',
          background: `transparent})`
        }}
      />
    </section>
  );
}
