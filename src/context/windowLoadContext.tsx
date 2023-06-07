import React, { createContext, useState } from 'react';

type WindowLoadContextProps = {
	windowLoad: boolean;
	setWindowLoad: (newValue: boolean) => void;
};

type Props = {
	children: React.ReactNode;
};

export const WindowLoadContext = createContext<WindowLoadContextProps>({
	windowLoad: false,
	setWindowLoad() {},
});

export default function WindowLoadContextProvider({ children }: Props) {
	const [windowLoad, setWindowLoad] = useState(false);

	return (
		<WindowLoadContext.Provider value={{ windowLoad, setWindowLoad }}>
			{children}
		</WindowLoadContext.Provider>
	);
}
