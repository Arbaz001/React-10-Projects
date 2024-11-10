import Amazon from '../assets/amazon.svg'
import Flipkart from '../assets/flipkart.svg'
import Shoe from '../assets/shoe_image.svg'

export const Content = ()=>{
    return(
        <div className='w-[1125px] h-[613px] mx-[200px] mt-[80px] mb-[91px] flex'>
            <div className='w-[595px] h-[613] '>
                <h1 className='w-[595px] h-[306px] text-[108px] leading-[102px] font-bold'>YOUR FEET DESERVE THE BEST</h1>

                <p className='w-[404px] h-[91px] text-[16px] leading-auto font-semibold mt-[38px] text-[#5A5959]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className='flex w-[331px] h-[41px] mt-[36px] gap-12 text-white' >
                    <button className='bg-[#D01C28] w-[150px] h-[41px] rounded-lg text-[24px] font-semibold'>Shop Now</button>
                    <button className='bg-[#D01C28] w-[150px] h-[41px] rounded-lg text-[24px] font-semibold'>Category</button>
                </div>

                <p className='w-[131px] h-[19px] mt-[36px] text-[16px] font-normal text-[#5A5959]'>Also Available On</p>

                <div className='flex w-[80px] h-[32px] mt-[16px] gap-[16px]'>
                    <img src={Flipkart} alt="flipkart" className='w-[32px] h-[32px]'/>
                    <img src={Amazon} alt="amazon" className='w-[32px] h-[32px]' />
                </div>
            </div>
            <img src={Shoe} alt="shoe" className='w-[530px] h-[487px] my-[62.97px]' />
        </div>
    );
};