/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { ImageProps } from '@/context/imagesContext';
import S from './CardImage.module.css';
import { useRouter } from 'next/router';
import useCardImage from '@/hooks/useCardImage';

type Props = {
	image: ImageProps;
	isAlbum?: boolean;
};

export default function CardImage({ image, isAlbum }: Props) {
	const { handleClickCard, handleHoverCard, isCardHover } = useCardImage();

	return (
		<figure
			className={S.imageContain}
			style={isAlbum ? { cursor: 'default' } : {}}
			onClick={() => {
				if (isAlbum) {
					return;
				}
				handleClickCard(image);
			}}
		>
			<h3
				className={`${S.person} ${isCardHover && S.active}`}
				onMouseEnter={() => {
					if (isAlbum) {
						return;
					}
					handleHoverCard(true);
				}}
				onMouseLeave={() => {
					if (isAlbum) {
						return;
					}
					handleHoverCard(false);
				}}
			>
				Ensaio | {image.person}
			</h3>
			<img
				className={`${isCardHover ? S.cardHover : ''}`}
				src={`${image.url}.jpg`}
				alt='imagem'
				onTouchStart={() => {
					if (isAlbum) {
						return;
					}
					handleHoverCard(true);
				}}
				onTouchEnd={() => {
					if (isAlbum) {
						return;
					}
					handleHoverCard(false);
				}}
				onMouseEnter={() => {
					if (isAlbum) {
						return;
					}
					handleHoverCard(true);
				}}
				onMouseLeave={() => {
					if (isAlbum) {
						return;
					}
					handleHoverCard(false);
				}}
			/>
		</figure>
	);
}
