/* eslint-disable @next/next/no-img-element */
import S from './CardImage.module.css';
import useCardImage from '@/hooks/useCardImage';
import { ImageProps } from '@/@types';

type Props = {
	image: ImageProps;
	isAlbum?: boolean;
};

export default function CardImage({ image, isAlbum }: Props) {
	const { handleClickCard } = useCardImage();

	return (
		<figure
			className={`${S.imageContain} ${isAlbum ? '' : S.offAlbum}`}
			style={isAlbum ? { cursor: 'default' } : {}}
			onClick={() => {
				if (isAlbum) {
					return;
				}
				handleClickCard(image);
			}}
		>
			<img
				src={`${image.url}.jpg`}
				alt='imagem'
			/>
			<h3 className={S.person}>Ensaio | {image.person}</h3>
		</figure>
	);
}
