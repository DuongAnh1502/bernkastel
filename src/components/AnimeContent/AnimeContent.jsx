import SideBar from "./SideBar";
import Content from "./Content";

const AnimeContent = ({ topAiringAnime, recentAnime, recentAnimeLoading }) => {
    return (
        <div className='flex flex-col lg:flex-row lg:items-start items-center mt-8'>
            <div className=' lg:w-3/4 w-full px-4 xl:px-0 xl:mr-4'>
                <Content
                    recentAnime={recentAnime}
                    recentAnimeLoading={recentAnimeLoading}
                />
            </div>
            <div className='lg:w-1/4 px-4 xl:px-0 w-full'>
                <SideBar topAiringAnime={topAiringAnime} />
            </div>
        </div>
    );
};

export default AnimeContent;
