import SideBar from "./SideBar";
import Content from "./Content";

const AnimeContent = ({ topAiringAnime, recentAnime }) => {
    console.log(recentAnime);
    return (
        <div className='flex flex-col lg:flex-row lg:items-start items-center mt-8'>
            <Content recentAnime={recentAnime} />
            <SideBar topAiringAnime={topAiringAnime} />
        </div>
    );
};

export default AnimeContent;
