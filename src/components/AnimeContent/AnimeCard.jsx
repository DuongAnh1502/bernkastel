import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ data }) => {
    const navigate = useNavigate();
    return (
        <>
            <div
                onClick={() => navigate(`/watch/${data?.id}`)}
                className='flex flex-col cursor-pointer group rounded-md w-[100%] h-[100%] group relative'
            >
                <div className='max-h-[250px] h-[80%]'>
                    <img
                        src={data?.image}
                        className='w-[100%] h-[100%] flex-1 rounded-md object-cover transition-all group-hover:opacity-60 '
                    />
                    <FaPlay
                        size={30}
                        className='absolute hidden group-hover:block text-gray-300 top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-150%] transition-all'
                    />
                </div>
                <h4 className='text-[18px] text-gray-300 font-normal mt-2 group-hover:text-secondary line-clamp-2 transition-all'>
                    {data?.title}
                </h4>
            </div>
        </>
    );
};

export default AnimeCard;
