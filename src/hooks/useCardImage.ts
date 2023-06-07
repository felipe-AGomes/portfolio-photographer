import { ImageProps } from '@/context/imagesContext';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function useCardImage() {
	const router = useRouter();

	const [isCardHover, setIsCardHover] = useState<boolean>(false);

	const handleClickCard = (image: ImageProps) => {
		router.push(`/${image.album}`);
	};

	const handleHoverCard = (isHover: boolean) => {
		setIsCardHover(isHover);
	};

	return { handleClickCard, handleHoverCard, isCardHover };
}
