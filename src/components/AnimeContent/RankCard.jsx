import { rank } from "../../constants";

const RankCard = ({ anime, id }) => {
    return (
        <div
            className={`flex w-full mb-2 max-h-[78px] rounded-md group items-center cursor-pointer ml-4 transition-all bg-[#1c1c1c] relative hover:bg-[#2c2c2c] rank-${
                id + 1
            } `}
        >
            <div
                style={{ backgroundImage: `url(${rank[id]?.rankImg})` }}
                className='w-[50px] h-[55px] bg-contain bg-no-repeat bg-center'
            ></div>
            <div className='poster'>
                <img
                    src={anime?.image}
                    alt='poster'
                    className='w-[60px] h-[78px]'
                />
            </div>
            <div className='info flex-1 ml-4'>
                <h4 className='text-[#aaa] group-hover:text-secondary text-[14px] max-w-[200px] font-normal break-words line-clamp-2'>
                    {anime?.title?.romaji}
                </h4>
            </div>
            {/* <p className='absolute text-gray-300 text-[12px] bottom-2 right-4 group-hover:text-secondary'>
                Episodes: {anime?.totalEpisodes}
            </p> */}
        </div>
    );
};

export default RankCard;
