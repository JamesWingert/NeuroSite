import Banner from '@/components/layout/Banner';
import Swipe from '@/components/swiper/Swiper';

import stock from '/public/resized/handhold.jpg';

export const AboutUs = () => {
  return (
    <div className=''>
      <Banner
        pageName='About Us'
        imageURL={
          'https://res.cloudinary.com/jameswingert/image/upload/c_lfill,f_auto,g_south,h_360,q_auto:low,w_1600/v1651729614/handhold_qo4inn.jpg'
        }
      />
      <div className='container pb-20'>
        <div className='grid grid-cols-1  lg:grid-cols-2 '>
          <div className='flex flex-col justify-center md:flex-col lg:max-w-6xl '>
            <h2 className=' mb-6 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-5xl lg:text-left  '>
              Welcome to
              <br />
              <p className='block text-[#7ba009]'>Neurology and Sleep </p>
              <span className='inline-block '>Medicine Associates</span>
            </h2>
            <p className='mb-10 text-base text-gray-700 md:mr-20 md:text-lg'>
              As a neurologic and sleep disorders specialty clinic, Neurology &
              Sleep Medicine Associates’ work is in a unique partnership of
              health care: providing and interpreting your tests, serving as a
              consultant to your referring physician and providing medical care
              for your specific neurologic and sleep disorder needs. Neurology &
              Sleep Medicine Associates’ has been carefully structured to
              provide a personal approach to patient care. Our goal is to
              provide you with very good service and pay close attention to your
              individual needs and concerns.
            </p>
          </div>
          <div className='grid-flow-col grid-cols-1  '>
            <Swipe />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
