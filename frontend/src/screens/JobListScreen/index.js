import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { listJobs, deleteJob, createJob } from '../../actions/jobActions'
import { JOB_CREATE_RESET } from '../../constants/jobConstants'
import {useNavigate} from 'react-router-dom'
import Header from '../../components/Header'

function JobListScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const jobList = useSelector(state => state.jobList)
    const { loading, error, jobs} = jobList

    const jobDelete = useSelector(state => state.jobDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = jobDelete

    const jobCreate = useSelector(state => state.jobCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, job: createdJob } = jobCreate


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // let keyword = history.location.search
    useEffect(() => {
        dispatch({ type: JOB_CREATE_RESET })

        if (!userInfo.isAdmin) {
            navigate('/login')
        }
        if (successCreate) {
            navigate(`/admin/job/${createdJob._id}/edit`)
        } else {
            dispatch(listJobs())
        }

    }, [dispatch, navigate, userInfo, successDelete, successCreate, createdJob])


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteJob(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createJob())
    }

    return (
        <div className="px-5" style={{marginTop:'12rem'}}>
            <Header></Header>
            <h1 style={{textAlign: 'center'}} className="highlight">JOB</h1>
            <Row className='align-items-center'>
                <Col md={7}>
                    
                </Col>

                <Col className='text-right' md={3}>
                    <Button  onClick={createProductHandler} className="mb-4 rounded-pill btn-sign-in">
                        <i className='fas fa-plus'></i> Create Job
                    </Button>
                </Col>
            </Row>

            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}


            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <div>
                            <Table striped bordered hover responsive className='table-sm' style={{textAlign: 'center'}}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>QUANTITY</th>
                                        <th>DESCRIPTION</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {jobs.map(job => (
                                        <tr key={job._id}>
                                            <td>{job._id}</td>
                                            <td>{job.name}</td>
                                            <td>{job.countInStock}</td>
                                            <td>{job.description}</td>
                                            <td>
                                                <LinkContainer to={`/admin/job/${job._id}/edit`}>
                                                    <Button variant='light' className='btn-sm'>
                                                        <i className='fas fa-edit'></i>
                                                    </Button>
                                                </LinkContainer>

                                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(job._id)}>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
        </div>
    )
}

export default JobListScreen