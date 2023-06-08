import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import S from './SocialMedia.module.css';
import useScrolledContext from '@/hooks/useScrolledContext';

type Props = {
	fixed?: boolean;
	style?: React.CSSProperties;
};

export default function SocialMedia({ fixed, style }: Props) {
	const { scrolled } = useScrolledContext();

	return (
		<div
			className={
				fixed
					? `${S.socialMediaShortMenu}`
					: `${S.socialMedia} ${scrolled ? S.scrolled : ''}`
			}
			style={{ ...style }}
		>
			<a
				href='https://www.instagram.com/carolpecharka/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiOutlineInstagram
					size={24}
					style={{ cursor: 'pointer' }}
				/>
			</a>
			<a
				href={`mailto:carolinepecharka@gmail.com?subject=${encodeURIComponent(
					'Portfolio Fotografia',
				)}`}
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiOutlineMail
					size={24}
					style={{ cursor: 'pointer' }}
				/>
			</a>
		</div>
	);
}
