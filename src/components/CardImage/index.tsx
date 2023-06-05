/* eslint-disable @next/next/no-img-element */
import { ImageProps } from '@/context/imagesContext';
import S from './CardImage.module.css';
import { useRouter } from 'next/router';

type Props = {
	image: ImageProps;
	isAlbum?: boolean;
};

export default function CardImage({ image, isAlbum }: Props) {
	const router = useRouter();

	const handleClick = (image: ImageProps) => {
		router.push(`/${image.album}`);
	};

	return (
		<figure
			className={S.imageContain}
			onClick={() => {
				if (isAlbum) {
					return;
				}
				handleClick(image);
			}}
		>
			<img
				src={`${image.url}.jpg`}
				alt='imagem'
			/>
		</figure>
	);
}
