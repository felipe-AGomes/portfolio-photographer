import { createContext, useState } from 'react';

type WindowWidthContextProps = {
	windowWidth: number | null;
	setWindowWidth: (newValue: number | null) => void;
};

type Props = {
	children: React.ReactNode;
};

export const WindowWidthContext = createContext<WindowWidthContextProps>({
	windowWidth: null,
	setWindowWidth(newValue) {},
});

export default function WindowWidthContextProvider({ children }: Props) {
	const [windowWidth, setWindowWidth] = useState<number | null>(null);

	return (
		<WindowWidthContext.Provider value={{ windowWidth, setWindowWidth }}>
			{children}
		</WindowWidthContext.Provider>
	);
}
