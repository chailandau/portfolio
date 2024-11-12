import type { MenuItem } from '~/molecules/Menu/components/MenuItems';

export interface HeaderProps {
  /* Nav to pass into header */
  menuItems?: MenuItem[] | null;
}
