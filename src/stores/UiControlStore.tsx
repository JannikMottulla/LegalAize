import { create } from "zustand";

/** UI state properties */
interface UiControlState {
  step: number;
}

/** UI control actions */
interface UiControlActions {
  setStep: (step: number) => void;
}

/** Combined store type */
type UiControlStore = UiControlState & UiControlActions;

/** Zustand store */
export const useUiControlStore = create<UiControlStore>((set) => ({
  step: 1,
  setStep: (step: number) => set({ step }),
}));
