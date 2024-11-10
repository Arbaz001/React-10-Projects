import Img from '../assets/nike_logo.svg'
const Nav=()=>{
   return(
    <div className=' w-[1536px] h-[72px] flex'>

        <img className='w-[76px] h-[42.75px] ml-[85px] mt-[15px]'  src={Img} alt=""/>

        <div className='w-[333px] h-[24px] ml-[392px] mt-[24px] text-black font-extrabold flex gap-10'>
            <p className='cursor-pointer'>Menu</p>
            <p className='cursor-pointer'>Location</p>
            <p className='cursor-pointer'>About</p>
            <p className='cursor-pointer'>Contact</p>
        </div>

        <button className='bg-[#D01C28] w-[75px] h-[31px] ml-[400px] mr-[79px] mt-[21px] text-center font-semibold text-white rounded-lg '>Login</button>

    </div>
   );   
};
export default Nav;