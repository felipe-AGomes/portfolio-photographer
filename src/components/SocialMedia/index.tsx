import {
	AiFillInstagram,
	AiOutlineInstagram,
	AiOutlineMail,
} from 'react-icons/ai';
import S from './SocialMedia.module.css';
import useScrolledContext from '@/hooks/useScrolledContext';

type Props = {
	shortMenu?: boolean;
	styles?: React.CSSProperties;
};

export default function SocialMedia({ shortMenu, styles }: Props) {
	const { scrolled } = useScrolledContext();

	return (
		<div
			className={
				shortMenu
					? `${S.socialMediaShortMenu}`
					: `${S.socialMedia} ${scrolled ? S.scrolled : ''}`
			}
			style={{ ...styles }}
		>
			<a
				href='https://www.instagram.com/carolpecharka/'
				target='_blank'
				rel='noopener noreferrer'
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '5px',
					outline: 'none',
					textDecoration: 'none',
					color: 'inherit',
				}}
			>
				<AiOutlineInstagram
					size={24}
					style={{ cursor: 'pointer' }}
				/>
				<AiOutlineMail
					size={24}
					style={{ cursor: 'pointer' }}
				/>
			</a>
		</div>
	);
}
