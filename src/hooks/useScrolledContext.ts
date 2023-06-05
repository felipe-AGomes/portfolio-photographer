import { ScrolledContext } from '@/context/scrolledContext';
import { useContext } from 'react';

export default function useScrolledContext() {
	const context = useContext(ScrolledContext);

	if (!context) {
		throw new Error('Deve estar dentro do contexto para poder utilizar');
	}

	return context;
}
