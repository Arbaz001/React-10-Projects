import Logo from '../assets/logo.svg';
const Nav=()=>{
      return(
        <div className='w-[1440px] h-[72px] flex'>
            <img className='w-[72px] h-[72px] ml-[51px] my-[4px]' src={Logo} alt="" />
            <div className='w-[231px] h-[24px] ml-[965px] mt-[20px] flex gap-10 text-black'>
                <p className='w-[50px] h-[24px] text-[#2E2E2E] cursor-pointer'>Home</p>
                <p className='w-[50px] h-[24px] text-[#2E2E2E] cursor-pointer'>About</p>
                <p className='w-[50px] h-[24px] text-[#2E2E2E] cursor-pointer'>Contact</p>
            </div>
        </div>
      );
};
export default Nav;
