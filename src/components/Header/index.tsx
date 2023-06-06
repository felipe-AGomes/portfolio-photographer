/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import S from './Header.module.css';

import {} from 'next/font/google';
import { CategoriesProps } from '@/context/currentPageContext';
import useCurrentPageContext from '@/hooks/useCurrentPageContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useScrolledContext from '@/hooks/useScrolledContext';
import useWindowWidthContext from '@/hooks/useWindowWidthContext';
import SocialMedia from '../SocialMedia';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

type Props = {
	personName?: string;
	isContact?: boolean;
};

export default function Header({ personName, isContact }: Props) {
	const { scrolled, setScrolled } = useScrolledContext();
	const { windowWidth, setWindowWidth } = useWindowWidthContext();
	const { setCurrentPage } = useCurrentPageContext();
	const [menuActive, setMenuActive] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		setWindowWidth(window.innerWidth);
	}, [windowWidth]);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

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
			style={windowWidth && windowWidth <= 780 ? { background: '#fff' } : {}}
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
			{windowWidth && windowWidth > 780 && (
				<>
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
				</>
			)}
			{windowWidth && windowWidth <= 780 && (
				<>
					<div className={S.personNameShortMenu}>
						<h1>CAROLINE PECHARKA</h1>
					</div>
					<div className={`${S.shortMenuContain} ${menuActive ? S.active : ''}`}>
						<ul id={S.shortMenu}>
							<li
								onClick={() => {
									setMenuActive(false);
									handleClick('inicio');
								}}
							>
								Início
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									handleClick('retratos');
								}}
							>
								Retratos
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									handleClick('bodyscape');
								}}
							>
								Bodyscape
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									handleClick('moda/beleza');
								}}
							>
								Moda/Beleza
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									handleClick('historia');
								}}
							>
								História
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									handleClick('contact');
								}}
							>
								Contato
							</li>
						</ul>
						<SocialMedia shortMenu />
					</div>
					{!menuActive && (
						<AiOutlineMenu
							onClick={() => {
								setMenuActive(true);
							}}
							size={24}
							style={{
								cursor: 'pointer',
								position: 'absolute',
								top: '36px',
								right: '20px',
								zIndex: '1001',
							}}
						/>
					)}
					{menuActive && (
						<>
							<AiOutlineClose
								onClick={() => {
									setMenuActive(false);
								}}
								size={24}
								style={{
									cursor: 'pointer',
									position: 'absolute',
									top: '36px',
									right: '20px',
									zIndex: '1001',
								}}
							/>
						</>
					)}
				</>
			)}
		</header>
	);
}
