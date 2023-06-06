/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { ImageProps } from '@/context/imagesContext';
import S from './CardImage.module.css';
import { useRouter } from 'next/router';

type Props = {
	image: ImageProps;
	isAlbum?: boolean;
};

export default function CardImage({ image, isAlbum }: Props) {
	const [isCardHover, setIsCardHover] = useState<boolean>(false);
	const router = useRouter();

	const handleClick = (image: ImageProps) => {
		router.push(`/${image.album}`);
	};

	const handleHover = (isHover: boolean) => {
		setIsCardHover(isHover);
	};

	return (
		<figure
			className={S.imageContain}
			style={isAlbum ? { cursor: 'default' } : {}}
			onClick={() => {
				if (isAlbum) {
					return;
				}
				handleClick(image);
			}}
		>
			<h3
				className={`${S.person} ${isCardHover && S.active}`}
				onTouchStart={() => {
					if (isAlbum) {
						return;
					}
					handleHover(true);
				}}
				onTouchEnd={() => {
					if (isAlbum) {
						return;
					}
					handleHover(true);
				}}
				onMouseEnter={() => {
					if (isAlbum) {
						return;
					}
					handleHover(true);
				}}
				onMouseLeave={() => {
					if (isAlbum) {
						return;
					}
					handleHover(false);
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
					handleHover(true);
				}}
				onTouchEnd={() => {
					if (isAlbum) {
						return;
					}
					handleHover(true);
				}}
				onMouseEnter={() => {
					if (isAlbum) {
						return;
					}
					handleHover(true);
				}}
				onMouseLeave={() => {
					if (isAlbum) {
						return;
					}
					handleHover(false);
				}}
			/>
		</figure>
	);
}
