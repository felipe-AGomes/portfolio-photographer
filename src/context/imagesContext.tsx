import React, { createContext, useContext, useState } from 'react';
import { CategoriesProps } from './currentPageContext';

type ImagesContextProps = {
	images: ImageProps[] | [];
	setImages: (newValue: ImageProps[] | []) => void;
};

export type ImageProps = {
	url: string;
	category: CategoriesProps;
	person?: string;
	locale?: string;
	album: string;
	cover: boolean;
};

type Props = {
	children: React.ReactNode;
};

//TODO: DADOS TEMPORÁRIOS

const temporaryImages: ImageProps[] = [
	{
		url: '/images/c7',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: true,
	},
	{
		url: '/images/c7',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: true,
	},
	{
		url: '/images/c7',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: true,
	},
	{
		url: '/images/c7',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: true,
	},
	{
		url: '/images/c7',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: true,
	},
	{
		url: '/images/a',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa',
		album: 'album1',
		cover: true,
	},
	{
		url: '/images/a1',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa',
		album: 'album1',
		cover: false,
	},
	{
		url: '/images/a3',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa',
		album: 'album1',
		cover: false,
	},
	{
		url: '/images/a4',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa',
		album: 'album1',
		cover: false,
	},

	{
		url: '/images/b',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa1',
		album: 'album2',
		cover: true,
	},
	{
		url: '/images/b1',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa1',
		album: 'album2',
		cover: false,
	},
	{
		url: '/images/b2',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa1',
		album: 'album2',
		cover: false,
	},
	{
		url: '/images/b3',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa1',
		album: 'album2',
		cover: false,
	},
	{
		url: '/images/b4',
		category: 'moda/beleza',
		locale: 'Studio',
		person: 'Alguma pessoa1',
		album: 'album2',
		cover: false,
	},

	{
		url: '/images/c',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: false,
	},
	{
		url: '/images/c1',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: false,
	},
	{
		url: '/images/c2',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: false,
	},
	{
		url: '/images/c3',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: false,
	},
	{
		url: '/images/c5',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: false,
	},
	{
		url: '/images/c6',
		category: 'bodyscape',
		locale: 'Studio',
		person: 'Alguma pessoa2',
		album: 'album3',
		cover: false,
	},

	{
		url: '/images/d',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
		album: 'album4',
		cover: true,
	},
	{
		url: '/images/d1',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
		album: 'album4',
		cover: false,
	},
	{
		url: '/images/d2',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
		album: 'album4',
		cover: false,
	},
	{
		url: '/images/d3',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
		album: 'album4',
		cover: false,
	},
	{
		url: '/images/d4',
		category: 'historia',
		locale: 'Florianópolis',
		person: 'Alguma pessoa3',
		album: 'album4',
		cover: false,
	},
];

export const ImagesContext = createContext<ImagesContextProps>({
	images: [],
	setImages: (newValue) => {},
});

export function ImagesContextProvider({ children }: Props) {
	const [images, setImages] = useState<ImageProps[] | []>(temporaryImages);

	return (
		<ImagesContext.Provider value={{ images, setImages }}>
			{children}
		</ImagesContext.Provider>
	);
}
