/* eslint-disable @next/next/no-img-element */
import S from './PersonImage.module.css';

type Props = {
	url: string;
};

export default function PersonImage({ url }: Props) {
	return (
		<div id={S.imageContain}>
			<img
				src={url}
				alt='Imagem de perfil'
			/>
		</div>
	);
}
