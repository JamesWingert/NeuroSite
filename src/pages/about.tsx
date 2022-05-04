import Banner from '@/components/layout/Banner';
import stock from '/public/handhold9.jpeg';
// import stock from 'public/handhold1.jpeg';
import Swipe from '@/components/swiper/Swiper';

export const AboutUs = () => {
  return (
    <div className="">
      <Banner pageName="About Us" imageURL={stock} />
      <div className="container pb-20">
        <div className="grid grid-cols-1  lg:grid-cols-2 ">
          <div className="flex flex-col justify-center lg:max-w-6xl md:flex-col ">
            <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl sm:leading-none text-center lg:text-left  ">
              Welcome to
              <br />
              <p className="block text-[#7ba009]">Neurology and Sleep </p>
              <span className="inline-block ">Medicine Associates</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg md:mr-20 mb-10">
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
          <div className="grid-cols-1 grid-flow-col  ">
            <Swipe />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
