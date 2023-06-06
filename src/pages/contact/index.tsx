import AboutMe from '@/components/AboutMe';
import Header from '@/components/Header';
import PersonImage from '@/components/PersonImage';
import SendMe from '@/components/SendMe';
import useWindowWidthContext from '@/hooks/useWindowWidthContext';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Contact() {
	const { windowWidth } = useWindowWidthContext();

	return (
		<main
			style={
				windowWidth && windowWidth <= 780 ? { padding: '120px 10px 50px' } : {}
			}
		>
			<Header
				personName='CAROLINE PECHARKA'
				isContact
			/>
			<AboutMe>
				<div>
					<h1>Redes sociais</h1>
					<div style={{ marginBottom: '10px' }}>
						<a
							href='https://www.instagram.com/carolpecharka/'
							target='_blank'
							rel='noopener noreferrer'
							style={{
								outline: 'none',
								textDecoration: 'none',
								color: '#000',
								display: 'inline',
							}}
						>
							<AiFillInstagram
								size={24}
								style={{ cursor: 'pointer', marginRight: '10px' }}
							/>
						</a>
						{/* <AiFillLinkedin
							size={24}
							style={{ cursor: 'pointer', marginRight: '10px' }}
						/> */}
					</div>

					<h1>Sobre mim</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt
						similique fuga mollitia totam, quaerat quam. Laborum, laudantium nihil,
						vel sunt quae optio sit cumque explicabo autem est quidem nam?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt
						similique fuga mollitia totam, quaerat quam. Laborum, laudantium nihil,
						vel sunt quae optio sit cumque explicabo autem est quidem nam?
					</p>
				</div>
				<PersonImage
					url={
						'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=996&t=st=1686074785~exp=1686075385~hmac=088c800223a9c67a26ca6e4d2b346068f0f6689219f947089b6d91779f8eacdc'
					}
				/>
			</AboutMe>
			<SendMe />
		</main>
	);
}
