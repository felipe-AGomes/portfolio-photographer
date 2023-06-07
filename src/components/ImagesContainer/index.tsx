import React, { useEffect } from 'react';
import S from './ImagesContainer.module.css';
import useWindowLoadContext from '@/hooks/useWindowLoadContext';

type Props = {
	children?: React.ReactNode;
};

export default function GridImagesContainer({ children }: Props) {
	const { windowLoad, setWindowLoad } = useWindowLoadContext();

	useEffect(() => {
		setWindowLoad(true);
	});

	return (
		<section className={`${S.imagesContainer} ${windowLoad ? S.fadeIn : ''}`}>
			{children}
		</section>
	);
}
