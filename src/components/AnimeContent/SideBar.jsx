import Button from "../Button";
import RankCard from "./RankCard";

const days = ["Day", "Week", "Month"];
const SideBar = ({ topAiringAnime }) => {
    const newAiring = [...topAiringAnime?.results];
    newAiring.pop();
    return (
        <div className='lg:w-1/4 px-4 xl:px-0 w-full'>
            <div className='header-sidebar'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-gray-300 text-2xl'>Top anime</h3>
                    <div className='px-[2px] py-[4px] flex bg-[#1c1c1c]'>
                        {days.map((day, id) => (
                            <Button
                                key={id}
                                styles={`px-[8px] text-[13px] py-[2px] ${
                                    id === 0
                                        ? "text-white"
                                        : "hover:bg-white bg-transparent text-gray-400"
                                }`}
                            >
                                {day}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='body-sidebar flex flex-col items-center my-4'>
                {newAiring?.map((anime, id) => (
                    <RankCard key={anime.id} anime={anime} id={id} />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
