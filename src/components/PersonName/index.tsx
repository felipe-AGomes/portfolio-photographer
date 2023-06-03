import { useEffect, useState } from 'react';
import S from './PersonName.module.css';

export default function PersonName() {
	const [scroled, setScroled] = useState<boolean>(false);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		setScroled(window.scrollY > 0);
	};

	return (
		<h1
			id='personName'
			className={`${S.personName} ${scroled ? S.scroled : ''}`}
		>
			CAROLINE PECHARKA
		</h1>
	);
}
