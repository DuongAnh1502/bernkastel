import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import { tabs } from "../../constants";

const TabsBar = () => {
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
                        }`}
                    >
                        {tab.title}
                    </span>
                ))}
                <div className='flex flex-row'>
                    <MdNavigateBefore
                        size={25}
                        className='text-gray-400 cursor-pointer hover:text-white -mr-2'
                    />
                    <MdNavigateNext
                        size={25}
                        className='text-gray-400 cursor-pointer hover:text-white'
                    />
                </div>
            </div>
        </>
    );
};

export default TabsBar;
