import AboutMe from '@/components/AboutMe';
import Header from '@/components/Header';
import PersonImage from '@/components/PersonImage';
import SendMe from '@/components/SendMe';
import {
	AiFillInstagram,
	AiFillLinkedin,
	AiOutlineWhatsApp,
} from 'react-icons/ai';

export default function Contact() {
	return (
		<main>
			<Header personName='CAROLINE PECHARKA' />
			<AboutMe>
				<div>
					<h1>Redes sociais</h1>
					<div style={{ marginBottom: '10px' }}>
						<AiFillInstagram
							size={24}
							style={{ cursor: 'pointer', marginRight: '10px' }}
						/>
						<AiFillLinkedin
							size={24}
							style={{ cursor: 'pointer', marginRight: '10px' }}
						/>
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
						'https://st2.depositphotos.com/5354238/8518/i/600/depositphotos_85180022-stock-photo-ugly-witch-disguise.jpg'
					}
				/>
			</AboutMe>
			<SendMe />
		</main>
	);
}
