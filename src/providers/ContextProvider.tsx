import CurrentPageContextProvider from '@/context/currentPageContext';
import { ImagesContextProvider } from '@/context/imagesContext';
import ScolledContextProvider from '@/context/scrolledContext';
import WindowWidthContextProvider from '@/context/windowWidthContext';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

export default function ContextProvider({ children }: Props) {
	return (
		<CurrentPageContextProvider>
			<ScolledContextProvider>
				<WindowWidthContextProvider>
					<ImagesContextProvider>{children}</ImagesContextProvider>
				</WindowWidthContextProvider>
			</ScolledContextProvider>
		</CurrentPageContextProvider>
	);
}
