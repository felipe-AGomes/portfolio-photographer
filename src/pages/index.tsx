import Header from '@/components/Header';
import Head from 'next/head';

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
			</main>
		</>
	);
}
