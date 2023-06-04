import { CurrentPageContext } from '@/context/currentPageContext';
import { useContext } from 'react';

export default function useCurrentPageContext() {
	const context = useContext(CurrentPageContext);

	if (!context) {
		throw new Error('Deve estar dentro do contexto para poder utilizar');
	}

	return context;
}
