import CardImage from '@/components/CardImage';
import Header from '@/components/Header';
import ImagesContainer from '@/components/GridImagesContainer';
import PersonName from '@/components/PersonName';
import Head from 'next/head';
import { useEffect } from 'react';
import GridItem from '@/components/GridItem';

export default function Home() {
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
						<CardImage path='/images/a2.jpg' />
					</GridItem>
					<GridItem>
						<CardImage path='/images/a.jpg' />
						<CardImage path='/images/c6.jpg' />
						<CardImage path='/images/a2.jpg' />
					</GridItem>
				</ImagesContainer>
			</main>
		</>
	);
}
