/**
 * PART 0 - Action Types
 * @type {string}
 */
const ACTION_X1V1 = '@x1_v1';


/**
 * PART 1 - Actions
 * @param dispatch
 * @returns {Function}
 */
const actionChangeV1 = dispatch => newV1 => {
	dispatch({type:ACTION_X1V1, payload:newV1})
};
export const actions = {actionChangeV1};


/**
 * PART 2 - Initial State
 * @type {{v1: string}}
 */
export const initialState = {v1:'43'};


/**
 * PART 3 - Reducers
 * @param state
 * @param action
 * @returns {{v1: *}|*}
 */
export default (state,action)=>{
	if (action.type === ACTION_X1V1) {
		return {...state, v1: action.payload}
	}
	return state;
}
