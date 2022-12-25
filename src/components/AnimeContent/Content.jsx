import { banner } from "../../assets";
import TabsBar from "./TabsBar";
import AnimeCard from "./AnimeCard";
const Content = ({ recentAnime }) => {
    console.log(recentAnime);
    return (
        <div className='lg:w-3/4 w-full px-4 xl:px-0 xl:mr-4'>
            <div className='banner-anime-award'>
                <img
                    src={banner}
                    alt='banner'
                    className='w-[900px] object-contain'
                />
            </div>
            <div className='flex flex-col md:flex-row items-start justify-between md:items-center mt-2'>
                <TabsBar />
            </div>
            <div className='anime-cards items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6 gap-y-0'>
                {recentAnime?.results.map((item, id) => (
                    <AnimeCard key={item?.id} data={item} id={id} />
                ))}
            </div>
        </div>
    );
};

export default Content;
