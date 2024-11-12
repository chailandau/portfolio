import { ZuSlice } from '../../declarations';

export interface MenuSlice {
  menuOpen: boolean;
  setMenuOpen: (arg: MenuSlice['menuOpen']) => void;
}

const createMenuSlice: ZuSlice<MenuSlice> = (set: (arg: () => Partial<MenuSlice>) => void) => ({
  menuOpen: false,
  setMenuOpen: (arg) => set(() => ({ menuOpen: arg })),
});

export default createMenuSlice;
