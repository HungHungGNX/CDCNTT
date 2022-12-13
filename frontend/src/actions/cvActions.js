import axios from 'axios'
import {
    CV_LIST_REQUEST,
    CV_LIST_SUCCESS,
    CV_LIST_FAIL,

    CV_DETAILS_REQUEST,
    CV_DETAILS_SUCCESS,
    CV_DETAILS_FAIL,

    CV_DELETE_REQUEST,
    CV_DELETE_SUCCESS,
    CV_DELETE_FAIL,

    CV_CREATE_REQUEST,
    CV_CREATE_SUCCESS,
    CV_CREATE_FAIL,

    CV_LIST_MY_REQUEST,
    CV_LIST_MY_SUCCESS,
    CV_LIST_MY_FAIL,
    CV_LIST_MY_RESET,

    CV_UPDATE_REQUEST,
    CV_UPDATE_SUCCESS,
    CV_UPDATE_FAIL,

    CV_CREATE_CV_REQUEST,
    CV_CREATE_CV_SUCCESS,
    CV_CREATE_CV_FAIL,


    CV_TOP_REQUEST,
    CV_TOP_SUCCESS,
    CV_TOP_FAIL,

} from '../constants/cvConstants'



export const createCv = (job_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CV_CREATE_REQUEST
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
            `/api/jobs/${job_id}/create/cv/`,
            {},
            config
        )
        dispatch({
            type: CV_CREATE_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: CV_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const updateCv = (cv) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CV_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/jobs/${cv._id}/update/cv/`,
            cv,
            config
        )

        dispatch({
            type: CV_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: CV_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: CV_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listCvDetails = (id) => async (dispatch,getState) => {
    try{
            dispatch({type:CV_DETAILS_REQUEST})

            const {
                userLogin: { userInfo },
            } = getState()
    
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
    

            const {data} = await axios.get(`/api/jobs/${id}/cv/`,config)

            
            dispatch ({
                type:CV_DETAILS_SUCCESS,
                payload: data
            })
    }catch(error){
        dispatch({
            type:CV_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail :error.message,
        })
    }
}


export const listMyCv = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CV_LIST_MY_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/jobs/mycv/`,
            config
        )

        dispatch({
            type: CV_LIST_MY_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: CV_LIST_MY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
