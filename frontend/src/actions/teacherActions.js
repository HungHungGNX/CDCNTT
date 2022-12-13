import axios from 'axios'
import {
    TEACHER_LIST_REQUEST,
    TEACHER_LIST_SUCCESS,
    TEACHER_LIST_FAIL,

    TEACHER_DETAILS_REQUEST,
    TEACHER_DETAILS_SUCCESS,
    TEACHER_DETAILS_FAIL,

    TEACHER_DELETE_REQUEST,
    TEACHER_DELETE_SUCCESS,
    TEACHER_DELETE_FAIL,

    TEACHER_CREATE_REQUEST,
    TEACHER_CREATE_SUCCESS,
    TEACHER_CREATE_FAIL,

    TEACHER_UPDATE_REQUEST,
    TEACHER_UPDATE_SUCCESS,
    TEACHER_UPDATE_FAIL,

    TEACHER_CREATE_REVIEW_REQUEST,
    TEACHER_CREATE_REVIEW_SUCCESS,
    TEACHER_CREATE_REVIEW_FAIL,


    TEACHER_TOP_REQUEST,
    TEACHER_TOP_SUCCESS,
    TEACHER_TOP_FAIL,

} from '../constants/teacherConstants'



export const listTeachers = (keyword= '') => async (dispatch) => {
    try{
            dispatch({type:TEACHER_LIST_REQUEST})

            const {data} = await axios.get(`/api/teachers?keyword=${keyword}`)

            dispatch ({
                type:TEACHER_LIST_SUCCESS,
                payload: data
            })
    }catch(error){
        dispatch({
            type:TEACHER_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail :error.message,
        })
    }
}




export const listTeacherDetails = (id) => async (dispatch) => {
    try{
            dispatch({type:TEACHER_DETAILS_REQUEST})

            const {data} = await axios.get(`/api/teachers/${id}`)

            dispatch ({
                type:TEACHER_DETAILS_SUCCESS,
                payload: data
            })
    }catch(error){
        dispatch({
            type:TEACHER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail :error.message,
        })
    }
}




export const createTeacherReview = (teacherId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TEACHER_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/teachers/${teacherId}/reviews/`,
            review,
            config
        )
        dispatch({
            type: TEACHER_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: TEACHER_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}