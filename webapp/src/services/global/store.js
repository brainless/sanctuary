import create from "zustand";

const initialState = {
  isNavExpanded: false, // For mobile
  isUserAuthenticated: false,
  user: {},
};

export default create((set) => ({
  ...initialState,

  toggleNavExpand: () =>
    set((state) => ({
      isNavExpanded: !state.isNavExpanded,
    })),
}));
