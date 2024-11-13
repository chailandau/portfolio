'use client';

import { useReducedMotion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

import Link from '~/atoms/Link';
import useStore from '~/store/useStore';

import { menuItems } from '~/molecules/Menu/components/MenuItems';

import type { FC } from 'react';
import type { MenuItem } from '~/molecules/Menu/components/MenuItems';

export interface MenuProps {
  /** Menu items to display */
  menuItems: MenuItem[] | null;
  /** Optional classname */
  className?: string;
}

interface AnchorScrollProps {
  /** Event object */
  e: { preventDefault: () => void };
  /** ID of the section to scroll to */
  sectionId: string;
}

const Menu: FC<MenuProps> = () => (
  <ul className="z-10 my-0 flex w-full list-none flex-col gap-11 pl-0 md:flex-row">
    <MenuContent />
  </ul>
);

export default Menu;

const MenuContent = () => {
  const currentPath = usePathname()?.replace('/', '');
  const { setMenuOpen } = useStore();

  const router = useRouter();

  const prefersReducedMotion = useReducedMotion() || false;

  const anchorScroll = ({ e, sectionId }: AnchorScrollProps) => {
    if (!sectionId) {
      return;
    }

    e.preventDefault();
    const anchoredSection = document.getElementById(sectionId);
    window.scrollTo({
      top: anchoredSection?.offsetTop,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    setTimeout(() => {
      router.push(`#${sectionId}`);
    }, 1000);
  };

  const menuListItems = menuItems?.map((menuItem) => {
    if (!menuItem) {
      return null;
    }

    const pageSlug = menuItem?.slug === 'home' ? '' : menuItem?.slug;
    const handleClick = (e: { preventDefault: () => void }) => {
      setMenuOpen(false);
      if (currentPath === menuItem?.slug && menuItem?.sectionId) {
        anchorScroll({ e, sectionId: menuItem?.sectionId });
      }
    };

    return (
      <li key={menuItem?.slug} className="relative flex w-full flex-col md:block md:w-auto">
        <Link
          key={menuItem?.slug}
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/${pageSlug}`}
          className="-m-3.5 flex w-auto justify-between p-3.5 font-mono text-sm lowercase md:justify-center md:text-center md:text-xs"
          underline={false}
          onClick={(e) => handleClick(e)}
          anchorLink={menuItem?.sectionId}
          ariaLabel={menuItem?.label || ''}
        >
          {menuItem?.label}
        </Link>
      </li>
    );
  });

  return <>{menuListItems}</>;
};
