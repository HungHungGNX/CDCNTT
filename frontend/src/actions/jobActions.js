import axios from 'axios'
import {
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_LIST_FAIL,

    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL,

    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_DELETE_FAIL,

    JOB_CREATE_REQUEST,
    JOB_CREATE_SUCCESS,
    JOB_CREATE_FAIL,

    JOB_UPDATE_REQUEST,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,

    JOB_CREATE_CV_REQUEST,
    JOB_CREATE_CV_SUCCESS,
    JOB_CREATE_CV_FAIL,


    JOB_TOP_REQUEST,
    JOB_TOP_SUCCESS,
    JOB_TOP_FAIL,

} from '../constants/jobConstants'




export const listJobs = (keyword= '') => async (dispatch) => {
    try{
            dispatch({type:JOB_LIST_REQUEST})

            const {data} = await axios.get(`/api/jobs?keyword=${keyword}`)

            dispatch ({
                type:JOB_LIST_SUCCESS,
                payload: data
            })
    }catch(error){
        dispatch({
            type:JOB_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail :error.message,
        })
    }
}


export const listJobDetails = (id) => async (dispatch) => {
    try{
            dispatch({type:JOB_DETAILS_REQUEST})

            const {data} = await axios.get(`/api/jobs/${id}`)

            
            dispatch ({
                type:JOB_DETAILS_SUCCESS,
                payload: data
            })
    }catch(error){
        dispatch({
            type:JOB_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail :error.message,
        })
    }
}


