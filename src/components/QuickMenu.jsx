import { actionMenu } from "../constants";
import { avatar } from "../assets";

function QuickMenu() {
    return (
        <nav>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between'>
                    {actionMenu.map((item) => (
                        <div
                            key={item.id}
                            className='flex text-[#a3a3a3] ml-8 cursor-pointer hover:text-secondary'
                        >
                            <item.icon
                                size='20px'
                                className=' mr-2'
                            ></item.icon>
                            <p className=' text-sm'>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='user'>
                    <img
                        src={avatar}
                        alt='avatar'
                        className='w-[40px] h-[40px] object-contain rounded-full'
                    />
                </div>
            </div>
        </nav>
    );
}

export default QuickMenu;
