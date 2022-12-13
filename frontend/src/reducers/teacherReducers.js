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
    TEACHER_CREATE_RESET,
  
    TEACHER_UPDATE_REQUEST,
    TEACHER_UPDATE_SUCCESS,
    TEACHER_UPDATE_FAIL,
    TEACHER_UPDATE_RESET,
  
    TEACHER_CREATE_REVIEW_REQUEST,
    TEACHER_CREATE_REVIEW_SUCCESS,
    TEACHER_CREATE_REVIEW_FAIL,
    TEACHER_CREATE_REVIEW_RESET,
  
    TEACHER_TOP_REQUEST,
    TEACHER_TOP_SUCCESS,
    TEACHER_TOP_FAIL,
  } from '../constants/teacherConstants'
  
  

  export const teacherListReducer = (state = { teachers: [] }, action) => {
    switch (action.type) {
      case TEACHER_LIST_REQUEST:
        return { loading: true, teachers: [] };
  
      case TEACHER_LIST_SUCCESS:
        return { loading: false, teachers: action.payload };
  
      case TEACHER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const teacherDetailsReducer = (state = { teacher: {reviews:[]} }, action) => {
    switch (action.type) {
      case TEACHER_DETAILS_REQUEST:
        return { loading: true, ...state};
  
      case TEACHER_DETAILS_SUCCESS:
        return { loading: false, teacher: action.payload };
  
      case TEACHER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  

  export const teacherReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TEACHER_CREATE_REVIEW_REQUEST:
            return { loading: true }
  
        case TEACHER_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }
  
        case TEACHER_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
  
        case TEACHER_CREATE_REVIEW_RESET:
            return {}
  
        default:
            return state
    }
  }
  