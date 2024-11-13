const Score = ({ score }) => {
    return (
        <div className="w-[135px] h-[151px] ">
            <p className="w-[62px] h-[112px] ml-[36.5px] text-[100px] text-black font-bold">{score}</p>
            <p className="w-[135px] h-[36px] text-[24px] text-black font-medium">Total Score</p>
        </div>
    );
};

export default Score;