import { useEffect, useState } from 'react';
import S from './Header.module.css';

export default function Header() {
	const [scroled, setScroled] = useState<boolean>(false);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		setScroled(window.scrollY > 0);
	};

	return (
		<header className={`${S.headerContain} ${scroled ? S.scroled : ''}`}>
			<ul>
				<li>Início</li>
				<li>Retratos</li>
				<li>Moda/Beleza</li>
				<li>História</li>
				<li>Contato</li>
			</ul>
		</header>
	);
}
