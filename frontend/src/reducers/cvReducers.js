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
    CV_CREATE_RESET,

    CV_UPDATE_REQUEST,
    CV_UPDATE_SUCCESS,
    CV_UPDATE_FAIL,
    CV_UPDATE_RESET,

    CV_CREATE_CV_REQUEST,
    CV_CREATE_CV_SUCCESS,
    CV_CREATE_CV_FAIL,


    CV_TOP_REQUEST,
    CV_TOP_SUCCESS,
    CV_TOP_FAIL,

    
    CV_LIST_MY_REQUEST,
    CV_LIST_MY_SUCCESS,
    CV_LIST_MY_FAIL,
    CV_LIST_MY_RESET,
} from '../constants/cvConstants'


export const CvCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CV_CREATE_REQUEST:
            return { loading: true }
  
        case CV_CREATE_SUCCESS:
            return { loading: false, success: true, cv: action.payload }
  
        case CV_CREATE_FAIL:
            return { loading: false, error: action.payload }
  
        case CV_CREATE_RESET:
            return {}
  
        default:
            return state
    }
  }
  

  export const cvUpdateReducer = (state = { cv: {} }, action) => {
    switch (action.type) {
        case CV_UPDATE_REQUEST:
            return { loading: true }
  
        case CV_UPDATE_SUCCESS:
            return { loading: false, success: true, cv: action.payload }
  
        case CV_UPDATE_FAIL:
            return { loading: false, error: action.payload }
  
        case CV_UPDATE_RESET:
            return { cv: {} }
  
        default:
            return state
    }
  }
  

  
export const cvDetailsReducer = (state = { cv: {} }, action) => {
    switch (action.type) {
      case CV_DETAILS_REQUEST:
        return { loading: true, ...state};
  
      case CV_DETAILS_SUCCESS:
        return { loading: false, cv: action.payload };
  
      case CV_DETAILS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  

  
export const cvListMyReducer = (state = { cv: [] }, action) => {
  switch (action.type) {
      case CV_LIST_MY_REQUEST:
          return {
              loading: true
          }

      case CV_LIST_MY_SUCCESS:
          return {
              loading: false,
              cv: action.payload
          }

      case CV_LIST_MY_FAIL:
          return {
              loading: false,
              error: action.payload
          }

      case CV_LIST_MY_RESET:
          return {
              cv: []
          }

      default:
          return state
  }
}
