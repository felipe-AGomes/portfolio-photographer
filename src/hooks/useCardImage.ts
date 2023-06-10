import { ImageProps } from '@/@types';
import { useRouter } from 'next/router';

export default function useCardImage() {
	const router = useRouter();

	const handleClickCard = (image: ImageProps) => {
		router.push(`/${image.album}`);
	};

	return { handleClickCard };
}
