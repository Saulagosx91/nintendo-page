import { useModal } from "../../stores/modalStore"
import CloseIcon from "./CloseIcon";

export function ImageModal() {
  const modal = useModal(state => state.modal);
  const url = useModal(state => state.imageUrl);
  const toggleModal = useModal(state => state.toggleModal);
  const enableScroll = useModal(state => state.enableScroll);

  const handleClick = () => {
    enableScroll();
    toggleModal();
  }

  return (
    <div className={`w-[120%] h-[140%] overflow-hidden md:w-full md:h-full absolute backdrop-blur-xl top-0 z-30 ${!modal && 'hidden'}`} onClick={(e) => {
      if (e.target === e.currentTarget) {
        handleClick();
      }
    }}>
      <div className="w-[95%] md:w-[600px] h-[300px] md:h-[400px] animate-jump-in animate-ease-out mx-auto mt-10">
        <button onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }} className="top-10 relative ml-[89%] md:ml-[93%] z-40 cursor-pointer hover:scale-110"><CloseIcon /></button>
        <img src={url} alt="" className="w-[95%] md:w-full h-full mx-auto" />
      </div>
    </div>
  )
}