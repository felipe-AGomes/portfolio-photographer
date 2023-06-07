import { WindowLoadContext } from '@/context/windowLoadContext';
import { useContext } from 'react';

export default function useWindowLoadContext() {
	const context = useContext(WindowLoadContext);

	if (!context) {
		throw new Error('Deve estar dentro do contexto para poder utilizar');
	}

	return context;
}
