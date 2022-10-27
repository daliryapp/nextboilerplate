import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    walletSidebar: false,
    mobileSidebar: false,
    sidebar: false,
    expandedSidebar: true,
    modal: null,
  },
  reducers: {
    //wallet sidebar
    showWalletSidebar: (state) => {
      state.walletSidebar = true;
    },
    hideWalletSidebar: (state) => {
      state.walletSidebar = false;
    },
    toggleWalletSidebar: (state) => {
      state.walletSidebar = !state.walletSidebar;
    },

    //mobile sidebar
    showMobileSidebar: (state) => {
      state.mobileSidebar = true;
    },
    hideMobileSidebar: (state) => {
      state.mobileSidebar = false;
    },
    toggleMobileSidebar: (state) => {
      state.mobileSidebar = !state.mobileSidebar;
    },
    //dashboard sidebar
    toogleDrawer: (state) => {
      state.sidebar = !state.sidebar;
    },
    showSidebar: (state) => {
      state.sidebar = true;
    },
    hideSidebar: (state) => {
      state.sidebar = false;
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    toggleExpandedSidebar: (state) => {
      state.expandedSidebar = !state.expandedSidebar;
    },
    closeExpandedSidebar: (state) => {
      state.expandedSidebar = false;
    },
    setSignedNavigateLink: (state, { payload }) => {
      state.signedNavigateLink = payload;
    },

    setModal: (state, action) => {
      state.modal = action?.payload;
    },
  },
});

export const {
  addFavourite,
  toggleSettingsModal,
  showWalletSidebar,
  hideWalletSidebar,
  toggleWalletSidebar,
  showMobileSidebar,
  hideMobileSidebar,
  toggleMobileSidebar,
  showSidebar,
  hideSidebar,
  toggleSidebar,
  toggleExpandedSidebar,
  closeExpandedSidebar,
  setSignedNavigateLink,
  setModal,
  toogleDrawer,
} = appSlice.actions;

export default appSlice;
