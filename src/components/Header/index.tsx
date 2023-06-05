/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import S from './Header.module.css';

import {} from 'next/font/google';
import { CategoriesProps } from '@/context/currentPageContext';
import useCurrentPageContext from '@/hooks/useCurrentPageContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useScrolledContext from '@/hooks/useScrolledContext';

type Props = {
	personName?: string;
	isContact?: boolean;
};

export default function Header({ personName, isContact }: Props) {
	const { scrolled, setScrolled } = useScrolledContext();
	const { setCurrentPage } = useCurrentPageContext();
	const router = useRouter();

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
	});

	const handleScroll = () => {
		setScrolled(window.scrollY > 0);
	};

	const handleClick = (category: CategoriesProps | 'contact') => {
		if (category === 'contact') {
			router.push('/contact');
			return;
		}
		router.push('/');
		setCurrentPage(category);
	};

	return (
		<header
			className={`${S.headerContain} ${
				isContact ? S.contact : scrolled ? S.scrolled : ''
			} 
				${personName ? `${S.personNameContain}` : ''}`}
		>
			<div className={S.logoBox}>
				<Link
					href='/'
					onClick={() => {
						setCurrentPage('inicio');
					}}
				>
					<img
						src='/logo.png'
						alt='Logo'
					/>
				</Link>
			</div>
			{personName && (
				<div className={S.personName}>
					<h1>{personName}</h1>
				</div>
			)}

			<ul>
				<li onClick={() => handleClick('inicio')}>Início</li>
				<li onClick={() => handleClick('retratos')}>Retratos</li>
				<li onClick={() => handleClick('bodyscape')}>Bodyscape</li>
				<li onClick={() => handleClick('moda/beleza')}>Moda/Beleza</li>
				<li onClick={() => handleClick('historia')}>História</li>
				<li onClick={() => handleClick('contact')}>Contato</li>
			</ul>
		</header>
	);
}
