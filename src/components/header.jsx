import img from './Images/herrr.jpg';

function Header() {
    return ( 
        <div> 
            <div className="w-full h-30 items-end fixed flex justify-center ">
                    <img src={img} alt="" className='sm:h-20 sm:w-20 h-14 w-14 mt-3 mr-3 rounded-full' />
                <div className="font-[Open Sans] sm:text-[40px] text-[30px]">
                    <button className=" hover:bg-white hover:text-black transition-all text-white font-semibold rounded-r-3xl rounded-l-3xl p-3 pr-5 pl-8 pt-2">Sanath Perera</button>
                </div>
            </div>

        </div>
     );
}

export default Header;