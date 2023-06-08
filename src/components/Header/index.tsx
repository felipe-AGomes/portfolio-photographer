/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import S from './Header.module.css';

import useCurrentPageContext from '@/hooks/useCurrentPageContext';
import Link from 'next/link';
import useScrolledContext from '@/hooks/useScrolledContext';
import useWindowWidthContext from '@/hooks/useWindowWidthContext';
import SocialMedia from '../SocialMedia';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import useWindowLoadContext from '@/hooks/useWindowLoadContext';
import useHeader from '@/hooks/useHeader';

type Props = {
	personName?: string;
	isContact?: boolean;
};

export default function Header({ personName, isContact }: Props) {
	const { scrolled } = useScrolledContext();
	const { handleScrollWindow, handleResizeWindow, handleClickMenu } =
		useHeader();
	const { setWindowLoad } = useWindowLoadContext();
	const { windowWidth, setWindowWidth } = useWindowWidthContext();
	const { setCurrentPage } = useCurrentPageContext();
	const [menuActive, setMenuActive] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScrollWindow);
		window.addEventListener('resize', handleResizeWindow);
		setWindowWidth(window.innerWidth);
	}, [windowWidth]);

	return (
		<header
			className={`${S.headerContain} ${
				isContact ? S.contact : scrolled ? S.scrolled : ''
			} 
				${personName ? `${S.personNameContain}` : ''}`}
			style={windowWidth && windowWidth <= 780 ? { background: 'var(--primary-color)' } : {}}
		>
			<div className={S.logoBox}>
				<Link
					href='/'
					onClick={() => {
						setWindowLoad(false);
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
						<li
							onClick={() => {
								setWindowLoad(false);
								handleClickMenu('inicio');
							}}
						>
							Início
						</li>
						<li
							onClick={() => {
								setWindowLoad(false);
								handleClickMenu('retratos');
							}}
						>
							Retratos
						</li>
						<li
							onClick={() => {
								setWindowLoad(false);
								handleClickMenu('bodyscape');
							}}
						>
							Bodyscape
						</li>
						<li
							onClick={() => {
								setWindowLoad(false);
								handleClickMenu('moda/beleza');
							}}
						>
							Moda/Beleza
						</li>
						<li
							onClick={() => {
								setWindowLoad(false);
								handleClickMenu('historia');
							}}
						>
							História
						</li>
						<li
							onClick={() => {
								setWindowLoad(false);
								handleClickMenu('contact');
							}}
						>
							Contato
						</li>
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
									setWindowLoad(false);
									handleClickMenu('inicio');
								}}
							>
								Início
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									setWindowLoad(false);
									handleClickMenu('retratos');
								}}
							>
								Retratos
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									setWindowLoad(false);
									handleClickMenu('bodyscape');
								}}
							>
								Bodyscape
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									setWindowLoad(false);
									handleClickMenu('moda/beleza');
								}}
							>
								Moda/Beleza
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									setWindowLoad(false);
									handleClickMenu('historia');
								}}
							>
								História
							</li>
							<li
								onClick={() => {
									setMenuActive(false);
									setWindowLoad(false);
									handleClickMenu('contact');
								}}
							>
								Contato
							</li>
						</ul>
						<SocialMedia fixed />
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
