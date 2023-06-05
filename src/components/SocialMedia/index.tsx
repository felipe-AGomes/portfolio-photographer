import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import S from './SocialMedia.module.css';
import useScrolledContext from '@/hooks/useScrolledContext';

export default function SocialMedia() {
	const { scrolled } = useScrolledContext();

	return (
		<div className={`${S.socialMedia} ${scrolled ? S.scrolled : ''}`}>
			<AiFillInstagram
				size={24}
				style={{ cursor: 'pointer', marginRight: '10px' }}
			/>
			<AiFillLinkedin
				size={24}
				style={{ cursor: 'pointer', marginRight: '10px' }}
			/>
		</div>
	);
}
