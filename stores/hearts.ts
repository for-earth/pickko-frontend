import { create } from 'zustand';

type HeartsState = {
  currentStep: number;
};

type HeartsAction = {
  setNextStep: (step: number) => void;
};

export type HeartsStore = HeartsAction & HeartsState;

const useHeartsStore = create<HeartsStore>((set) => ({
  currentStep: 0,
  setNextStep: (step: number) => set({ currentStep: step }),
}));

export default useHeartsStore;
