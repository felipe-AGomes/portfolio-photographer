import React from 'react';
import S from './AboutMe.module.css';

type Props = {
	children: React.ReactNode;
};

export default function AboutMe({ children }: Props) {
	return <div className={S.aboutMeContain}>{children}</div>;
}
