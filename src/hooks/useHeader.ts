import { useRouter } from 'next/router';
import { useState } from 'react';
import useScrolledContext from './useScrolledContext';
import useCurrentPageContext from './useCurrentPageContext';
import useWindowWidthContext from './useWindowWidthContext';
import { CategoriesProps } from '@/@types';

export default function useHeader() {
	const router = useRouter();
	const { setScrolled } = useScrolledContext();
	const { setCurrentPage } = useCurrentPageContext();
	const { setWindowWidth } = useWindowWidthContext();

	const handleResizeWindow = () => {
		setWindowWidth(window.innerWidth);
	};

	const handleScrollWindow = () => {
		setScrolled(window.scrollY > 0);
	};

	const handleClickMenu = (category: CategoriesProps | 'contact') => {
		if (category === 'contact') {
			router.push('/contact');
			return;
		}
		router.push('/');
		setCurrentPage(category);
	};

	return {
		handleClickMenu,
		handleResizeWindow,
		handleScrollWindow,
	};
}
