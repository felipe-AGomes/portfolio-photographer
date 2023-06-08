import SocialMedia from '../SocialMedia';

export default function PersonDescription() {
	return (
		<div>

			<h1>Sobre mim</h1>
			<p style={{ fontFamily: 'grenda, sans-serif' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt
				similique fuga mollitia totam, quaerat quam. Laborum, laudantium nihil, vel
				sunt quae optio sit cumque explicabo autem est quidem nam?
			</p>
			<p style={{ fontFamily: 'grenda, sans-serif' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt
				similique fuga mollitia totam, quaerat quam. Laborum, laudantium nihil, vel
				sunt quae optio sit cumque explicabo autem est quidem nam?
			</p>
			
			<h1>Redes sociais</h1>
			<SocialMedia fixed style={{ justifyContent: 'flex-start' }} />
		</div>
	);
}
