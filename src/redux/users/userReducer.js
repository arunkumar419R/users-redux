import {USERS_FETCH_REQUEST,USERS_FETCH_SUCCESS,USERS_FETCH_FAIL,DELETE_USER} from './userConstants'

const initialState = {
    users : [],
    pageCount : 0,
    error : '',
    loading : false
}


const reducer = (state = initialState, action)=>{
    switch(action.type){
        case USERS_FETCH_REQUEST :
            return {
                ...state,
                loading : true
            }
        case USERS_FETCH_SUCCESS :
            return {
                ...state,
                users : action.payload.users,
                loading : false,
                pageCount:action.payload.pageCount
            }
        case USERS_FETCH_FAIL :
            return {
                users : [],
                loading : false
            }
        case DELETE_USER :
            return {
                users : state.users.filter(user=> user.id != action.payload),
                loading : false
            }
        default :
        return state
    }
}
export default reducer;