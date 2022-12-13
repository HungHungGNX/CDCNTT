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
    JOB_CREATE_RESET,
  
    JOB_UPDATE_REQUEST,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,
    JOB_UPDATE_RESET,
  
    JOB_CREATE_REVIEW_REQUEST,
    JOB_CREATE_REVIEW_SUCCESS,
    JOB_CREATE_REVIEW_FAIL,
    JOB_CREATE_REVIEW_RESET,
  
    JOB_TOP_REQUEST,
    JOB_TOP_SUCCESS,
    JOB_TOP_FAIL,
  } from '../constants/jobConstants'
  
  
  
  export const jobListReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
      case JOB_LIST_REQUEST:
        return { loading: true, jobs: [] };
  
      case JOB_LIST_SUCCESS:
        return { loading: false, jobs: action.payload };
  
      case JOB_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };



export const jobDetailsReducer = (state = { job: {cv:[]} }, action) => {
    switch (action.type) {
      case JOB_DETAILS_REQUEST:
        return { loading: true, ...state};
  
      case JOB_DETAILS_SUCCESS:
        return { loading: false, job: action.payload };
  
      case JOB_DETAILS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  