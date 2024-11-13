const StartGame = ({toggle}) => {
  return (
    <div className="w-[1182px] h-[522px] mt-[100px]  ml-[170px] mr-[170px] flex">
        <img className="animate-pulse" src="/images/dices.svg" alt="dice image" />
        <div className="w-[528px] h-[188px] my-[167px]">
            <p className="w-[528px] h-[144px] text-[96px] font-bold text-black">DICE GAME</p>
            <button onClick={toggle} className="w-[220px] h-[44px] ml-[308px] bg-black font-bold text-white rounded-xl transition-all duration-200 ease-in-out  active:bg-gray-700 active:scale-95" >Play Now</button>
        </div>
    </div>
  );
};

export default StartGame;