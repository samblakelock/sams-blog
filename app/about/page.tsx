import Image from 'next/image';

export const metadata = {
  title: 'About',
  description: 'About Sam Blakelock',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">About</h1>
      <div className='float-left mr-4 mb-2'>
        <Image
          src="/images/sam-blakelock-profile.jpg"
          alt="Sam Blakelock"
          width={100}
          height={100}
        />
      </div>
      <p className="mb-4">
        {`Sam Blakelock is the co-founder and CEO of Pickup Music, an independent education technology company based in Los Angeles.`}
      </p>
      <p className="mb-4">
        {`In 2015, he founded Pickup Music while studying jazz guitar at the Aaron Copland School of Music in New York City. From 2015-2018, he grew Pickup Music to become the leading online community of professional musicians with over a million Instagram followers. It then evolved into the leading provider of music education online with over 20,000 members.`}
      </p>
      <p className="mb-4">
        {`Sam's music has been streamed millions of times. His work has been featured on GuitarWorld.com and in Total Guitar magazine and he has performed at the Blue Note Jazz Club, Smalls Jazz Club, and Brooklyn Bowl.`}
      </p>
      <p className="mb-4">
        {`At Pickup Music, Sam leads the content, curriculum, engineering, and product teams.`}
      </p>
      <p className="mb-4">
        {`Sam is a Pasifika New Zealander currently living in California.`}
      </p>
    </section>
  )
}
