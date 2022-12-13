import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Row, Col, Image, ListGroup, Button, Card, Form, Container} from "react-bootstrap";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Header from "../../components/Header";
import {CV_CREATE_RESET} from "../../constants/cvConstants"
import {
  listJobDetails,
} from "../../actions/jobActions";
import {useNavigate} from 'react-router-dom'
import { createCv } from "../../actions/cvActions";

function JobScreenDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const jobDetails = useSelector((state) => state.jobDetails);
  const { loading, error, job } = jobDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const CvCreate = useSelector(state => state.CvCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, cv: createdCv } = CvCreate

  useEffect(() => {
    dispatch({ type: CV_CREATE_RESET })
    if (successCreate) {
      navigate(`/jobs/cv/${createdCv._id}/edit`)
  } else {
      dispatch(listJobDetails(id))
  }
  }, [dispatch,userInfo,navigate,successCreate,createdCv]);


  const createMyCv = () => {
    dispatch(createCv(id))
  } 

  return (
    <div>
      <Header />
      <main className="py-3 mtBig">
        <Container>
          <Link to="/" className="btn btn-light my-3" style={{fontSize:'12px'}}>
            Go Back
          </Link>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div>
              <Row className ='mt-4'>
                <Col md={4}>
                  <Image src={job.image} alt={job.name} fluid style ={{borderRadius:'6px'}} />
                </Col>
                <Col md={3} varinat="flush"  style={{fontSize:'16px'}}>
                  <ListGroup varinat="flush">

                    <ListGroup.Item>
                      <h3>{job.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      Description: {job.description}
                    </ListGroup.Item>

                  </ListGroup>
                </Col>


                <Col md={3}>
                  <Card>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row style={{fontSize:'16px'}} >
                          <Col>Quantity</Col>
                          <Col>
                            <strong>{job.countInStock}</strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      
                      <ListGroup.Item>
                        <Button
                          onClick={createMyCv}
                          className="btn-block rounded-pill btn-add-cart"
                          style={{fontSize:'10px'}} 
                          disabled={job.countInStock == 0}
                          type="button"
                        >
                          Apply CV
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}

export default JobScreenDetails;
