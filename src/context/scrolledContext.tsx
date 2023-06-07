import { ScrolledContextProps } from '@/@types';
import { createContext, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

export const ScrolledContext = createContext<ScrolledContextProps>({
	scrolled: false,
	setScrolled: (newValue) => {},
});

export default function ScolledContextProvider({ children }: Props) {
	const [scrolled, setScrolled] = useState<boolean>(false);

	return (
		<ScrolledContext.Provider value={{ scrolled, setScrolled }}>
			{children}
		</ScrolledContext.Provider>
	);
}
