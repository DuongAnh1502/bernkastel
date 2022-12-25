import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";

import Button from "./Button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
import styles from "../style";

function Hero({ topAiringAnime }) {
    return (
        <section className='w-full '>
            <Swiper
                pagination={true}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className='mySwiper text-white p-4'
            >
                {topAiringAnime?.results?.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className='px-4 xl:px-0 p-4 w-full] cursor-grab w-full h-full'
                    >
                        <div className='flex justify-between items-center'>
                            <div className='lg:flex w-2/3 hidden flex-col justify-between mr-2'>
                                <h2
                                    className={`${styles.heading2} break-words line-clamp-2`}
                                >
                                    {item?.title?.english}
                                </h2>
                                <p
                                    className={`text-[#a3a3a3] text-md line-clamp-4`}
                                >
                                    {item?.description}
                                </p>
                                <Button styles='max-w-[200px] mt-4 text-2xl flex items-center justify-center'>
                                    <FaPlay className='mr-2' />
                                    PLAY NOW
                                </Button>
                            </div>
                            <div className='w-full'>
                                <div
                                    className='pt-[40%] bg-cover bg-no-repeat bg-center rounded-lg relative'
                                    style={{
                                        backgroundImage: `url(${item?.cover})`,
                                    }}
                                >
                                    <div className='absolute bg-black-gradient inset-0 lg:hidden' />
                                    <div className='lg:hidden absolute left-4 bottom-10 max-w-[400px] flex flex-col justify-between mr-2'>
                                        <h2
                                            className={`text-white font-semibold md:text-[3rem] text-[2rem]`}
                                        >
                                            {item?.title?.english}
                                        </h2>
                                        <p
                                            className={`text-white text-md line-clamp-4 md:text-[16px] text-[14px]`}
                                        >
                                            {item?.description}
                                        </p>
                                        <Button styles='md:max-w-[200px] mt-4 md:text-2xl flex items-center justify-center max-w-[180px] text-xl'>
                                            <FaPlay className='mr-2' />
                                            PLAY NOW
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Hero;
