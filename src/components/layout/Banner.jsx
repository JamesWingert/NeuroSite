/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import NextImage from '../NextImage';

export default function Banner({ pageName, imageURL }) {
  return (
    <div className=' mt-[6.5rem]'>
      <div className='relative h-[41vh]'>
        <div className='relative'>
          <NextImage
            useSkeleton={true}
            layout='fill'
            src={imageURL}
            alt=''
            // width={1600}
            priority={true}
            objectFit='cover'
            quality={60}
            // unoptimized={true}
            // placeholder="blur"
            loading='eager'
          />
          {/* <img
            className="absolute"
            alt=""
            src={imageURL.src}
            style={{
              // float: "inline-start",
              width: '100%',
              height: '41vh',
              objectFit: 'cover',
            }}
          /> */}
          <div className='relative h-[41vh] items-center  justify-center bg-black bg-opacity-50 px-4 pt-1 sm:px-6'>
            {/* py-20  */}
            <h1 className='mt-16 text-center text-6xl font-extrabold tracking-tight text-white sm:mt-20 sm:text-7xl '>
              {pageName}
            </h1>

            <div className='pt-12 sm:pt-20' />

            <div className='mx-auto flex max-w-sm  justify-center sm:max-w-none '>
              <div className=' justify-center space-y-4 px-10 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-7 sm:space-y-0'>
                <Link href='/appointment' passHref>
                  <button className='  duration-450  flex items-center justify-center rounded-xl border  border-white bg-wcyan px-4 py-3 text-center text-base font-bold text-white shadow-sm   transition  hover:bg-[#07363D]'>
                    REQUEST APPOINTMENT
                  </button>
                </Link>
                <Link
                  href='https://app.formdr.com/practice/MjE0Mjg=/form/K5ixNCi0wAsH8UKm1OIxGddyP-sLyZbr'
                  passHref
                >
                  <button
                    className='duration-450  flex items-center  justify-center rounded-xl border border-wcyan bg-white px-9 py-3 text-base font-bold text-wcyan  shadow-sm transition hover:text-[#052429] '
                    // hover:text-white
                  >
                    NEW PATIENT FORM
                  </button>
                </Link>
              </div>
            </div>
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  );
}