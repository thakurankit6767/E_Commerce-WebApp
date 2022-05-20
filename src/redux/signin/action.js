export const LOGIN_LOADING="LOGIN_LOADING";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_FAILURE="LOGIN_FAILURE";

export const loginLoading=()=>({
    type:LOGIN_LOADING
})

export const loginSuccess=(payload)=>({
    type:LOGIN_SUCCESS,
    payload
})

export const loginFailure=()=>({
    type:LOGIN_FAILURE
})