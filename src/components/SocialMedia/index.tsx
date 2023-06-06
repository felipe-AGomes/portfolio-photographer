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
				shortMenu
					? `${S.socialMediaShortMenu}`
					: `${S.socialMedia} ${scrolled ? S.scrolled : ''}`
			}
		>
			<a
				href='https://www.instagram.com/carolpecharka/'
				target='_blank'
				rel='noopener noreferrer'
				style={{outline: 'none', textDecoration: 'none', color: '#000', display: 'inline' }}
			>
				<AiFillInstagram
					size={24}
					style={{ cursor: 'pointer' }}
				/>
			</a>
			{/* <AiFillLinkedin
				size={24}
				style={{ cursor: 'pointer'}}
			/> */}
		</div>
	);
}
