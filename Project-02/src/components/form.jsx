import img from '../assets/contact.svg'
const form = () => {
    return (
        <div className="w-[1161px] h-[600px] ml-[198px] flex">
            <div className="w-[472px] h-[457px] mt-[71.5px]">

                {/* chat and call btn */}
                <div className='w-[472px] h-[44px] flex gap-8'>
                    <button className='bg-black w-[220px] h-[44px] text-[16px] font-semibold text-white rounded-lg transition-all duration-200 ease-in-out active:bg-gray-700 active:scale-95'>Via Support Chart</button>
                    <button className='bg-black w-[220px] h-[44px] text-[16px] font-semibold text-white rounded-lg transition-all duration-200 ease-in-out active:bg-gray-700 active:scale-95'>Via Call</button>
                </div>

                {/* Email */}
                <button className='mt-[17px] bg-white w-[472px] h-[44px] text-[16px] font-semibold text-black rounded-lg  border-2 border-black'>Via Email Form</button>

                {/* form */}
                <div className="w-[440px] h-[268px] ml-[16px] mt-[23px]">
                    <div className="w-full h-full p-4">
                        <div className="w-full space-y-4">
                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white px-1 text-black font-semibold">Name</label>
                                <input type="text" className="w-full border border-black rounded-lg bg-white text-black p-3 focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-200 ease-in-out " placeholder="Enter your name" />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white px-1 text-black font-semibold">E-Mail</label>
                                <input type="email" className="w-full border border-black rounded-lg bg-white text-black p-3 focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-200 ease-in-out" placeholder="Enter your email" />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white px-1 text-black font-semibold">TEXT</label>
                                <textarea className="w-full border border-black rounded-lg bg-white text-black p-3 focus:outline-none h-20 focus:border-blue-500 focus:shadow-md transition-all duration-200 ease-in-out" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                    </div>
                    {/* submit button */}
                    <button className='bg-black w-[220px] h-[44px] text-[16px] ml-[236px] mt-[17px] font-semibold text-white rounded-lg transition-all duration-200 ease-in-out  active:bg-gray-700 active:scale-95 '>SUBMIT</button>
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default form