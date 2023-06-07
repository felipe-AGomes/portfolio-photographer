import S from './PersonName.module.css';
import useScrolledContext from '@/hooks/useScrolledContext';

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
