import { ImagesContextProvider } from '@/context/imagesContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ImagesContextProvider>
			<Component {...pageProps} />
		</ImagesContextProvider>
	);
}
