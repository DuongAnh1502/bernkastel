import { FaSearch } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

function SearchBar() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='ml-2'>
            <label htmlFor='search-field' className='sr-only'>
                Search all songs
            </label>
            <div className='flex flex-row justify-start items-center bg-primary'>
                <FaSearch className='w-5 h-5 ml-3 text-[#a3a3a3]' />
                <input
                    type='search'
                    id='search-field'
                    placeholder='Search'
                    className='flex-1 bg-transparent outline-none border-none placeholder-gray-500 text-base text-white p-4 py-2'
                />
                <MdOutlineScreenSearchDesktop
                    className=' mr-2 text-[#a3a3a3]'
                    size='18px'
                />
                <h4 className='hidden lg:block text-[14px] text-[#a3a3a3] mr-4'>
                    Quick Access
                </h4>
            </div>
        </form>
    );
}

export default SearchBar;
