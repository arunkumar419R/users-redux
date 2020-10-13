import {USERS_FETCH_REQUEST,USERS_FETCH_SUCCESS,USERS_FETCH_FAIL,DELETE_USER} from './userConstants'
import axios from 'axios'

export const fetchUsers = (pageCount)=>{
    console.log(pageCount);
    return (dispatch)=>{
        dispatch(usersFetchRequest());
        axios.get(`http://jsonplaceholder.typicode.com/photos/?_page=${pageCount}&_limit=5`).then(res=>{
            dispatch(usersFetchSuccess(res.data,pageCount));
        }).catch(err=>{
            dispatch(usersFetchFail(err));
        })
    }
}

export const usersFetchRequest = ()=>{
    return {
        type : USERS_FETCH_REQUEST
    }
}

export const usersFetchSuccess = (users,pageCount)=>{
    return {
        type : USERS_FETCH_SUCCESS,
        payload : {
            users:users,
            pageCount:pageCount
        }
    }
}

export const usersFetchFail = (err)=>{
    return {
        type : USERS_FETCH_FAIL,
        payload : err
    }
}

export const deleteUserReq = (userId)=>{
    return (dispatch)=>{
        dispatch(deleteuserById(userId));
    }
}

export const deleteuserById = (userId)=>{
    return {
        type:DELETE_USER,
        payload:userId
    }
}