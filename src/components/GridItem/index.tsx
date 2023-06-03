import React from 'react';
import S from './GridItem.module.css';

type Props = {
	children: React.ReactNode;
};

export default function GridItem({ children }: Props) {
	return <div className={S.gridItemContain}>{children}</div>;
}
