export interface MenuItem {
  /** Page label */
  label: string;
  /** Page slug */
  slug: string;
  /** Optional section ID for anchor scroll */
  sectionId?: string;
}

export const menuItems: MenuItem[] = [
  {
    label: 'Work',
    slug: 'home',
    sectionId: 'work',
  },
  {
    label: 'About',
    slug: 'about',
  },
  {
    label: 'Contact',
    slug: 'contact',
  },
];
