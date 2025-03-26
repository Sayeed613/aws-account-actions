import { create } from "zustand";

const useAccountStore = create((set) => ({
  selectedActions: [],
  toggleAction: (action) =>
    set((state) => ({
      selectedActions: state.selectedActions.includes(action)
        ? state.selectedActions.filter((a) => a !== action)
        : [...state.selectedActions, action],
    })),
}));

export default useAccountStore;
