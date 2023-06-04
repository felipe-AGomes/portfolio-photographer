import CurrentPageContextProvider from '@/context/currentPageContext';
import { ImagesContextProvider } from '@/context/imagesContext';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

export default function ContextProvider({ children }: Props) {
	return (
		<CurrentPageContextProvider>
			<ImagesContextProvider>{children}</ImagesContextProvider>
		</CurrentPageContextProvider>
	);
}
