import CardImage from '@/components/CardImage';
import GridImagesContainer from '@/components/ImagesContainer';
import Header from '@/components/Header';
import PersonName from '@/components/PersonName';
import { ImageProps } from '@/context/imagesContext';
import useImagesContext from '@/hooks/useImagesContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Album() {
	const [albumImages, setAlbumImages] = useState<ImageProps[] | []>([]);
	const { images } = useImagesContext();
	const router = useRouter();
	const { album } = router.query;

	useEffect(() => {
		setAlbumImages(images.filter((image) => image.album === album));
	}, [images, album]);

	return (
		<main>
			<Header />
			<PersonName />
			<GridImagesContainer>
				{albumImages.map((image) => {
					return (
						<CardImage
							isAlbum={true}
							key={image.url}
							image={image}
						/>
					);
				})}
			</GridImagesContainer>
		</main>
	);
}
