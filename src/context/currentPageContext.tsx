import { CategoriesProps, CurrentPageContextProps } from '@/@types';
import React, { createContext, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

export const CurrentPageContext = createContext<CurrentPageContextProps>({
	currentPage: 'inicio',
	setCurrentPage: (newValue) => {},
});

export default function CurrentPageContextProvider({ children }: Props) {
	const [currentPage, setCurrentPage] = useState<CategoriesProps>('inicio');

	return (
		<CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</CurrentPageContext.Provider>
	);
}
