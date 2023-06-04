import { ImagesContext } from '@/context/imagesContext';
import { useContext } from 'react';

export default function useImagesContext() {
	const context = useContext(ImagesContext);

	if (!context) {
		throw new Error('Deve estar dentro do contexto para poder utilizar');
	}

	return context
}
