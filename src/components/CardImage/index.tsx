/* eslint-disable @next/next/no-img-element */
import S from './CardImage.module.css';

type Props = {
	path: string;
};

export default function CardImage({ path }: Props) {
	return (
		<div className={S.imageContain}>
			<img
				src={path}
				alt='imagem'
			/>
		</div>
	);
}
