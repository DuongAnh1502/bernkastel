import { useSelector, useDispatch } from "react-redux";

import { setEpisode } from "../../redux/features/animePlayerSlice";

const EpisoderBar = ({ animeInfo, currentEpisode }) => {
    const dispatch = useDispatch();
    return (
        <div className='w-full grid grid-cols-4 gap-2 overflow-scroll max-h-[700px]'>
            {animeInfo?.episodes?.map((episode) => (
                <h4
                    className={`text-gray-400 p-1 text-center font-semibold bg-[#1c1c1c] rounded-md cursor-pointer hover:bg-[#2c2c2c] ${
                        episode?.number === currentEpisode
                            ? "bg-[#ccc] text-black"
                            : null
                    }`}
                    key={episode.id}
                    onClick={() => dispatch(setEpisode(episode?.number))}
                >
                    {episode?.number}
                </h4>
            ))}
        </div>
    );
};

export default EpisoderBar;
