import React from 'react';
import useReducers from './reducers';

const GContext = React.createContext();

export const Provider = ({ children }) => {
	const [store, actions] = useReducers();
	return <GContext.Provider value={{store,...actions}}>
		{children}
	</GContext.Provider>;
};

export default GContext;
