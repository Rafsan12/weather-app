import FavoriteIcon from "../../assets/heart.svg";
export default function Favourite({ onshow }) {
  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={FavoriteIcon} alt="" />
        <span onClick={onshow}>Favourite Locations</span>
      </div>
    </>
  );
}
