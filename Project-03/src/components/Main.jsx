import RollDice from "./RollDice";
import Score from "./Score";
import SelectNumbers from "./SelectNumbers";
const Gameplay = () => {
  return (
    <>
    <div className="w-[1280px] h-[151px] mt-[61px] ml-[120px] flex">
        <Score />
        <SelectNumbers />
    </div>
        <RollDice />
    </>
  );
};

export default Gameplay;