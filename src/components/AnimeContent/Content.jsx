import { banner } from "../../assets";
import TabsBar from "./TabsBar";
import AnimeCard from "./AnimeCard";
const Content = ({ recentAnime, recentAnimeLoading }) => {
    return (
        <>
            <div className='banner-anime-award'>
                <img
                    src={banner}
                    alt='banner'
                    className='w-[900px] object-contain'
                />
            </div>
            <div className='flex flex-col md:flex-row items-start justify-between md:items-center my-2'>
                <TabsBar />
            </div>
            <div className='anime-cards items-center grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6 gap-y-2'>
                {recentAnimeLoading ? (
                    <h1>LOADING...</h1>
                ) : (
                    recentAnime?.results.map((item, id) => (
                        <AnimeCard key={item?.id} data={item} id={id} />
                    ))
                )}
            </div>
        </>
    );
};

export default Content;
