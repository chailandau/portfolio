'use client';


import { usePathname } from 'next/navigation';

import useStore from '~/store/useStore';
import { anchorScroll } from '~/util/navigation';

import { menuItems } from '~/molecules/Menu/components/MenuItems';
import styles from '~/molecules/Menu/Menu.module.scss';

import type { FC } from 'react';
import type { MenuItem } from '~/molecules/Menu/components/MenuItems';

export interface MenuProps {
    /** Menu items to display */
    menuItems: MenuItem[] | null;
    /** Optional classname */
    className?: string;
}

const Menu: FC<MenuProps> = ({ className = styles['menu'] }) => {
    const { setMenuOpen } = useStore();

    return (
        <ul className={className}>
            {menuItems?.map((menuItem) => {
                if (!menuItem) {
                    return null;
                }

                const currentPath = usePathname()?.replace('/', '');

                const handleClick = (e: { preventDefault: () => void }) => {
                    setMenuOpen(false);
                    if (currentPath === menuItem?.slug && menuItem?.sectionId) {
                        anchorScroll({ e, sectionId: menuItem?.sectionId });
                    }
                };

                return (
                    <li key={menuItem?.slug}>
                        <Link
                            key={menuItem?.slug}
                            href={`${process.env.NEXT_PUBLIC_BASE_URL}/${pageSlug}`}
                            className={styles['menu-link']}
                            underline={false}
                            onClick={(e) => handleClick(e)}
                            anchorLink={menuItem?.sectionId}
                            ariaLabel={menuItem?.label || ''}
                        >
                            {menuItem?.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Menu;
