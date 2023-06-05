import CurrentPageContextProvider from '@/context/currentPageContext';
import { ImagesContextProvider } from '@/context/imagesContext';
import ScolledContextProvider from '@/context/scrolledContext';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

export default function ContextProvider({ children }: Props) {
	return (
		<CurrentPageContextProvider>
			<ScolledContextProvider>
				<ImagesContextProvider>{children}</ImagesContextProvider>
			</ScolledContextProvider>
		</CurrentPageContextProvider>
	);
}
