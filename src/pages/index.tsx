import CardImage from '@/components/CardImage';
import Header from '@/components/Header';
import ImagesContainer from '@/components/GridImagesContainer';
import PersonName from '@/components/PersonName';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import GridItem from '@/components/GridItem';
import useImagesContext from '@/hooks/useImagesContext';
import useCurrentPageContext from '@/hooks/useCurrentPageContext';
import { CategoriesProps } from '@/context/currentPageContext';
import { ImagesProps } from '@/context/imagesContext';
import ContactPage from '@/components/ContactPage';

export default function Home() {
	const { images } = useImagesContext();
	const { currentPage } = useCurrentPageContext();
	const [filteredImages, setFilteredImages] = useState<ImagesProps[] | []>([]);

	useEffect(() => {
		const newFilteredImages = images.filter(
			(image) => image.category === currentPage,
		);

		setFilteredImages(newFilteredImages);
	}, [currentPage]);

	console.log(currentPage);
	return (
		<>
			<Head>
				<title>Caroline Pecharka | Fotografa</title>
				<meta
					name='Portfolio'
					content='Criado por Felipe de Almeida Gomes: falmeidagomes13@gmail.com'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<main>
				<Header />
				<PersonName />
				<ImagesContainer>
					{currentPage === 'inicio'
						? images.map((image) => {
								return (
									<CardImage
										key={image.url}
										path={`${image.url}.jpg`}
									/>
								);
						  })
						: filteredImages.map((image) => {
								return (
									<CardImage
										key={image.url}
										path={`${image.url}.jpg`}
									/>
								);
						  })}
				</ImagesContainer>
			</main>
		</>
	);
}
