import { WindowWidthContext } from '@/context/windowWidthContext';
import { useContext } from 'react';

export default function useWindowWidthContext() {
	const context = useContext(WindowWidthContext);

	if (!context) {
		throw new Error('Deve estar dentro do contexto para poder utilizar');
	}

	return context;
}
