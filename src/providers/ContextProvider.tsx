import CurrentPageContextProvider from '@/context/currentPageContext';
import { ImagesContextProvider } from '@/context/imagesContext';
import ScolledContextProvider from '@/context/scrolledContext';
import WindowLoadContextProvider from '@/context/windowLoadContext';
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
					<WindowLoadContextProvider>
						<ImagesContextProvider>{children}</ImagesContextProvider>
					</WindowLoadContextProvider>
				</WindowWidthContextProvider>
			</ScolledContextProvider>
		</CurrentPageContextProvider>
	);
}
