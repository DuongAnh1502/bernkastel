import { useGetTrendingAnimeQuery } from "../redux/services/aniListApi";
import { useGetRecentUpdatedAnimeQuery } from "../redux/services/gogoAnimeApi";
import { Hero, AnimeContent } from "../components";

function Home() {
    const { data: topAiringAnime, isFetching } = useGetTrendingAnimeQuery();
    const { data: recentAnime, isFetching: recentAnimeLoading } =
        useGetRecentUpdatedAnimeQuery();
    if (isFetching) return <h1>Loading...</h1>;
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
