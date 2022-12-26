import { useSelector } from "react-redux";

import { useGetTrendingAnimeQuery } from "../redux/services/aniListApi";
import { useGetRecentUpdatedAnimeQuery } from "../redux/services/gogoAnimeApi";
import { Hero, AnimeContent } from "../components";

function Home() {
    const { animeType, page } = useSelector((state) => state.animeType);
    const { data: topAiringAnime, isFetching } = useGetTrendingAnimeQuery();
    const { data: recentAnime, isFetching: recentAnimeLoading } =
        useGetRecentUpdatedAnimeQuery({ animeType, page });
    if (isFetching) return <h1 className='text-gray-300'>Loading...</h1>;
    return (
        <div className=''>
            <Hero topAiringAnime={topAiringAnime} />
            <AnimeContent
                topAiringAnime={topAiringAnime}
                recentAnime={recentAnime}
                recentAnimeLoading={recentAnimeLoading}
            />
        </div>
    );
}

export default Home;
