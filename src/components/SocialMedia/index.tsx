import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import S from './SocialMedia.module.css';
import useScrolledContext from '@/hooks/useScrolledContext';

type Props = {
	shortMenu?: boolean;
};

export default function SocialMedia({ shortMenu }: Props) {
	const { scrolled } = useScrolledContext();

	return (
		<div
			className={
				shortMenu ? `${S.socialMediaShortMenu}` : `${S.socialMedia} ${scrolled ? S.scrolled : ''}`
			}
		>
			<AiFillInstagram
				size={24}
				style={{ cursor: 'pointer'}}
			/>
			<AiFillLinkedin
				size={24}
				style={{ cursor: 'pointer'}}
			/>
		</div>
	);
}
