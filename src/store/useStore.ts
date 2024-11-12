import { create } from 'zustand';

import createMenuSlice, { MenuSlice } from '~/store/createMenuSlice';

type StoreState = MenuSlice;

const useStore = create<StoreState>()((...args) => ({
  ...createMenuSlice(...args),
}));

export default useStore;
