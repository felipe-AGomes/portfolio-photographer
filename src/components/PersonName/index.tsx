import { useEffect, useState } from 'react';
import S from './PersonName.module.css';
import useScrolledContext from '@/hooks/useScrolledContext';
import useWindowWidthContext from '@/hooks/useWindowWidthContext';

export default function PersonName() {
	const { scrolled } = useScrolledContext();

	return (
		<h1
			id='personName'
			className={`${S.personName} ${scrolled ? S.scrolled : ''}`}
		>
			CAROLINE PECHARKA
		</h1>
	);
}
