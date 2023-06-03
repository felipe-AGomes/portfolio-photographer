import S from './Header.module.css';

export default function Header() {
	return (
		<header className={S.headerContain}>
			<ul>
				<li>Início</li>
				<li>Retratos</li>
				<li>Moda</li>
				<li>Beleza</li>
				<li>História</li>
				<li>Contato</li>
			</ul>
		</header>
	)
}
