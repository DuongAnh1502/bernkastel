import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import QuickMenu from "./QuickMenu";
import { HiBars3 } from "react-icons/hi2";
import { logo } from "../assets";

function NavBar() {
    return (
        <nav className='h-[60px] flex items-center'>
            <div className='flex flex-1 flex-row items-center'>
                <div className='menu mr-2'>
                    <HiBars3
                        className='text-[#666] cursor-pointer'
                        size='35px'
                    />
                </div>
                <Link to='/'>
                    <img
                        src={logo}
                        alt='logo'
                        className='object-cover w-[135px] h-[40px]'
                    />
                </Link>
                <div className='search flex-1'>
                    <SearchBar />
                </div>
            </div>
            <div className='quick-menu flex-1'>
                <QuickMenu />
            </div>
        </nav>
    );
}

export default NavBar;
