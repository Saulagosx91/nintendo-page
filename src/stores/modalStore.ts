import { create } from "zustand";

interface ModalState {
  modal: boolean,
  imageUrl: string,
  setImageUrl: (url: string) => void,
  toggleModal: () => void,
  blockScroll: () => void,
  enableScroll: () => void
}

function preventScroll(e: Event) {
  window.scrollTo(0, 0);
  e.preventDefault();
}

export const useModal = create<ModalState>()((set) => ({
  modal: false,
  imageUrl: '',
  setImageUrl: (url) => set(() => ({ imageUrl: url })),
  toggleModal: () => set((state) => ({ modal: !state.modal })),
  blockScroll: () => window.addEventListener('scroll', preventScroll, { passive: false }),
  enableScroll: () => window.removeEventListener('scroll', preventScroll)
}));