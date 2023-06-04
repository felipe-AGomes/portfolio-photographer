import React, { createContext, useContext, useState } from 'react';
import { CategoriesProps } from './currentPageContext';

type ImagesContextProps = {
	images: ImagesProps[] | [];
	setImages: (newValue: ImagesProps[] | []) => void;
};

export type ImagesProps = {
	url: string;
	category: CategoriesProps;
	person?: string;
	locale?: string;
};

type Props = {
	children: React.ReactNode;
};

//TODO: DADOS TEMPORÁRIOS

const temporaryImages: ImagesProps[] = [
	{
		url: '/images/a',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa',
	},
	{
		url: '/images/a1',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa',
	},
	{
		url: '/images/a2',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa',
	},
	{
		url: '/images/a3',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa',
	},
	{
		url: '/images/a4',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa',
	},

	{
		url: '/images/b',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa1',
	},
	{
		url: '/images/b1',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa1',
	},
	{
		url: '/images/b2',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa1',
	},
	{
		url: '/images/b3',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa1',
	},
	{
		url: '/images/b4',
		category: 'retratos',
		locale: 'Studio',
		person: 'Alguma pessoa1',
	},

	{
		url: '/images/c',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa2',
	},
	{
		url: '/images/c1',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa2',
	},
	{
		url: '/images/c2',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa2',
	},
	{
		url: '/images/c3',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa2',
	},
	{
		url: '/images/c5',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa2',
	},
	{
		url: '/images/c6',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa2',
	},
	{
		url: '/images/c7',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa2',
	},

	{
		url: '/images/d',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
	},
	{
		url: '/images/d1',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
	},
	{
		url: '/images/d2',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
	},
	{
		url: '/images/d3',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
	},
	{
		url: '/images/d4',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
	},
];

export const ImagesContext = createContext<ImagesContextProps>({
	images: [],
	setImages: (newValue) => {},
});

export function ImagesContextProvider({ children }: Props) {
	const [images, setImages] = useState<ImagesProps[] | []>(temporaryImages);

	return (
		<ImagesContext.Provider value={{ images, setImages }}>
			{children}
		</ImagesContext.Provider>
	);
}
