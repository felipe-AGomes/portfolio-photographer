/* eslint-disable react-hooks/exhaustive-deps */
import CardImage from '@/components/CardImage';
import Header from '@/components/Header';
import ImagesContainer from '@/components/ImagesContainer';
import PersonName from '@/components/PersonName';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import useImagesContext from '@/hooks/useImagesContext';
import useCurrentPageContext from '@/hooks/useCurrentPageContext';
import { ImageProps } from '@/context/imagesContext';

export default function Home() {
	const { images } = useImagesContext();
	const { currentPage } = useCurrentPageContext();
	const [justCover, setJustCover] = useState<ImageProps[] | []>([]);
	const [filteredImages, setFilteredImages] = useState<ImageProps[] | []>([]);

	useEffect(() => {
		const newJustCover = images.filter((image) => image.cover);
		setJustCover(newJustCover);
	}, [images]);

	useEffect(() => {
		const newFilteredImages = justCover.filter(
			(image) => image.category === currentPage,
		);

		setFilteredImages(newFilteredImages);
	}, [currentPage, justCover]);

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
						? justCover.map((image, index) => {
								return (
									<CardImage
										key={image.url + index}
										image={image}
									/>
								);
						  })
						: filteredImages.map((image, index) => {
								return (
									<CardImage
										key={image.url + index}
										image={image}
									/>
								);
						  })}
				</ImagesContainer>
			</main>
		</>
	);
}
