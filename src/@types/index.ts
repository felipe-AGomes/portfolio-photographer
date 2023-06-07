export type Inputs = {
	name: string;
	message: string;
};

export type CategoriesProps =
	| 'historia'
	| 'moda/beleza'
	| 'retratos'
	| 'inicio'
	| 'bodyscape';

export type CurrentPageContextProps = {
	currentPage: CategoriesProps;
	setCurrentPage: (newValue: CategoriesProps) => void;
};

export type ImagesContextProps = {
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

export type ScrolledContextProps = {
	scrolled: boolean;
	setScrolled: (newValue: boolean) => void;
};

export type WindowLoadContextProps = {
	windowLoad: boolean;
	setWindowLoad: (newValue: boolean) => void;
};

export type WindowWidthContextProps = {
	windowWidth: number | null;
	setWindowWidth: (newValue: number | null) => void;
};
