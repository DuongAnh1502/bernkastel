import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { EpisoderBar, Related } from "../components/WatchField";
import {
    useGetAnimeInfoQuery,
    useGetEpisodeLinkQuery,
} from "../redux/services/gogoAnimeApi";

const WatchField = () => {
    const { animeId } = useParams();
    const { data: animeInfo, isFetching: fetchingInfo } =
        useGetAnimeInfoQuery(animeId);
    const { currentEpisode } = useSelector((state) => state.animePlayer);
    const { data: episodeData, isFetching } = useGetEpisodeLinkQuery(
        `${animeId}-episode-${currentEpisode}`
    );
    return (
        <div className='flex flex-col-reverse lg:flex-row flex-wrap w-full mt-6'>
            <div className='w-full lg:w-1/6 mx-4 bg-[#000] p-2'>
                <EpisoderBar
                    animeInfo={animeInfo}
                    isFetching={isFetching}
                    currentEpisode={currentEpisode}
                />
            </div>
            <div className='lg:w-4/6 sm:order-1 w-full'>
                <div className='flex flex-1'>
                    {isFetching ? (
                        <h1>Loading...</h1>
                    ) : (
                        <iframe
                            className='aspect-video w-full'
                            src={episodeData?.headers?.Referer}
                            scrolling='no'
                        ></iframe>
                    )}
                </div>
                <div className='w-full lg:w-1/6'>
                    <Related />
                </div>
            </div>
        </div>
    );
};

export default WatchField;
