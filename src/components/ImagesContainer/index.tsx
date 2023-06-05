import React from 'react';
import S from './ImagesContainer.module.css';

type Props = {
	children?: React.ReactNode;
};

export default function GridImagesContainer({ children }: Props) {
	return <section className={S.imagesContainer}>{children}</section>;
}
