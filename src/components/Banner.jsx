import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slideImage1 from "../assets/banner/1.jpeg"
import slideImage2 from "../assets/banner/1.jpg"
import slideImage3 from "../assets/banner/2.jpeg"


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {

    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                // pagination={true}
                // mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImage1})` }} className="min-h-[40vh] md:min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900	rounded-md flex justify-center items-center">
                    <div className='text-center'>

                        <Fade>
                            <h2 className='text-2xl md:text-4xl  lg:text-6xl font-bold text-white tracking-widest'>Your Journey Begins</h2>
                        </Fade>
                        <p className='text-white'>A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.</p>
                    </div>

                </div></SwiperSlide>
                <SwiperSlide><div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImage2})` }} className="min-h-[40vh] md:min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900	rounded-md flex justify-center items-center">
                    <div className='text-center'>
                        <h2 className='text-2xl  md:text-4xl  lg:text-6xl font-bold text-white tracking-widest'>DETROIT COMMERCIAL <br />
                            REAL ESTATE</h2>
                    </div>

                </div></SwiperSlide>
                <SwiperSlide><div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImage3})` }} className="min-h-[40vh] md:min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900	rounded-md flex justify-center items-center">
                    <div className='text-center'>
                        <h2 className='text-2xl  md:text-4xl  lg:text-6xl font-bold text-white tracking-widest'>DETROIT COMMERCIAL <br />
                            REAL ESTATE</h2>
                    </div>

                </div></SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;