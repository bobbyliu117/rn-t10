import {useReducer} from 'react';
import x1Reducer, {actions as x1Actions, initialState as x1InitialState} from './x1';

export default () => {
	const store = {};
	const actions = {};
	const [s,d] = useReducer(x1Reducer,x1InitialState);
	store.x1 = s;
	for (const key in x1Actions) {
		actions[key] = x1Actions[key](d);
	}

	return [store, actions];
}
