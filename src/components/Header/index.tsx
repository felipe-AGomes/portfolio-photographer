import { useEffect, useState } from 'react';
import S from './Header.module.css';

import {} from 'next/font/google';
import { CategoriesProps } from '@/context/currentPageContext';
import useCurrentPageContext from '@/hooks/useCurrentPageContext';
import { useRouter } from 'next/router';

type Props = {
	personName?: string;
};

export default function Header({ personName }: Props) {
	const [scroled, setScroled] = useState<boolean>(false);
	const { setCurrentPage } = useCurrentPageContext();
	const router = useRouter();

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		setScroled(window.scrollY > 0);
	};

	const handleClick = (category: CategoriesProps | 'contato') => {
		if (category === 'contato') {
			router.push('/contato');
			return;
		}
		router.push('/');
		setCurrentPage(category);
	};

	return (
		<header
			className={`${S.headerContain} ${scroled ? S.scroled : ''}
				${personName ? `${S.personNameContain}` : ''}`}
		>
			{personName && (
				<div>
					<h1>{personName}</h1>
				</div>
			)}

			<ul>
				<li onClick={() => handleClick('inicio')}>Início</li>
				<li onClick={() => handleClick('retratos')}>Retratos</li>
				<li onClick={() => handleClick('moda/beleza')}>Moda/Beleza</li>
				<li onClick={() => handleClick('historia')}>História</li>
				<li onClick={() => handleClick('contato')}>Contato</li>
			</ul>
		</header>
	);
}
