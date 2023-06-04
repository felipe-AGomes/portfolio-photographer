import CardImage from '@/components/CardImage';
import Header from '@/components/Header';
import ImagesContainer from '@/components/GridImagesContainer';
import PersonName from '@/components/PersonName';
import Head from 'next/head';
import { useEffect } from 'react';
import GridItem from '@/components/GridItem';
import useImagesContext from '@/hooks/useImagesContext';

export default function Home() {
	const { images } = useImagesContext();

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
					<GridItem>
						<CardImage path='/images/a.jpg' />
						<CardImage path='/images/b.jpg' />
						<CardImage path='/images/d.jpg' />
					</GridItem>
					<GridItem>
						<CardImage path='/images/c7.jpg' />
						<CardImage path='/images/a1.jpg' />
						<CardImage path='/images/b1.jpg' />
					</GridItem>
					<GridItem>
						<CardImage path='/images/b2.jpg' />
						<CardImage path='/images/c6.jpg' />
						<CardImage path='/images/a3.jpg' />
					</GridItem>
				</ImagesContainer>
			</main>
		</>
	);
}
