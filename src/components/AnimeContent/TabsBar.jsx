import { useSelector, useDispatch } from "react-redux";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import {
    nextPage,
    prevPage,
    setSubType,
} from "../../redux/features/animeTypeSlice";
import { tabs } from "../../constants";

const TabsBar = () => {
    const dispatch = useDispatch();
    const { page, animeType, isRandom } = useSelector(
        (state) => state.animeType
    );
    return (
        <>
            <h3 className='flex-1 font-semibold text-[24px] text-gray-200'>
                Recently Updated
            </h3>
            <div className='flex flex-row items-center'>
                {tabs.map((tab, id) => (
                    <span
                        key={tab.id}
                        className={`text-[16px] text-white opacity-60 hover:opacity-100 cursor-pointer ${
                            id === tabs.length - 1 ? "mr-0" : "mr-4"
                        } ${
                            id + 1 === animeType ? "opacity-100" : "opacity-60"
                        }`}
                        onClick={
                            id === tabs.length - 1
                                ? null
                                : () => dispatch(setSubType(id + 1))
                        }
                    >
                        {tab.title}
                    </span>
                ))}
                <div className='flex flex-row'>
                    <div className='relative group'>
                        <MdNavigateBefore
                            size={25}
                            className={`${
                                page === 1 ? "text-white" : "text-gray-400"
                            } cursor-pointer hover:text-white -mr-2`}
                            onClick={() => dispatch(prevPage(1))}
                        />
                        <p className='hidden absolute -top-5 transform translate-x-[-10px] py-1 bg-[#1c1c1c] text-gray-200 text-[10px] min-w-[50px] group-hover:block text-center'>
                            Page {page === 1 ? "1" : page - 1}
                        </p>
                    </div>
                    <div className='relative group'>
                        <MdNavigateNext
                            size={25}
                            className={`text-gray-400 cursor-pointer hover:text-white`}
                            onClick={() => dispatch(nextPage(1))}
                        />
                        <p className='hidden absolute -top-5 transform translate-x-[-10px] text-center py-1 bg-[#1c1c1c] text-gray-200 text-[10px] min-w-[50px] group-hover:block'>
                            Page {page + 1}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabsBar;
