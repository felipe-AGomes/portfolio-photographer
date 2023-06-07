import CardImage from '@/components/CardImage';
import ImagesContainer from '@/components/ImagesContainer';
import Header from '@/components/Header';
import PersonName from '@/components/PersonName';
import { ImageProps } from '@/context/imagesContext';
import useImagesContext from '@/hooks/useImagesContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useWindowWidthContext from '@/hooks/useWindowWidthContext';
import useWindowLoadContext from '@/hooks/useWindowLoadContext';

export default function Album() {
	const [albumImages, setAlbumImages] = useState<ImageProps[] | []>([]);
	const { windowWidth } = useWindowWidthContext();
	const { windowLoad, setWindowLoad } = useWindowLoadContext();
	const { images } = useImagesContext();
	const router = useRouter();
	const { album } = router.query;

	useEffect(() => {
		setAlbumImages(images.filter((image) => image.album === album));
	}, [images, album]);

	useEffect(() => {
		setWindowLoad(true);
	});

	return (
		<main>
			<Header />
			{windowWidth && windowWidth > 780 && <PersonName />}
			<ImagesContainer>
				{albumImages.map((image) => {
					return (
						<CardImage
							isAlbum={true}
							key={image.url}
							image={image}
						/>
					);
				})}
			</ImagesContainer>
		</main>
	);
}
