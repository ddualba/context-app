import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
	const [ language, setLanguage ] = useState('spanish');
	const changeLanguage = (e) => setLanguage(e.target.value);
	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	);
}

// following 2 lines are equivelent
// value={{ language: language, changeLanguage: changeLanguage }}
// is the same as
// value={{ language, changeLanguage }}
