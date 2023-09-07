// import { decrement, increment, increment5 } from "../reducers/counterReducer";

import { increment5 } from "../reducers/counterReducer";

export { decrement, increment } from "../reducers/counterReducer";

export const asyncincrement5 = (p) => async (dispatch, getState) => {
    // console.log(p);
    // console.log(dispatch);
    // console.log(getState());
    setTimeout(() => {
        dispatch(increment5(p));
    }, 2000);
};
