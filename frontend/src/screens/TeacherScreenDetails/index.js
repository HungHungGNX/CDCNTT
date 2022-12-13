import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Row, Col, Image, ListGroup, Button, Card, Form, Container} from "react-bootstrap";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import styles from './TeacherScreenDetails.module.css'
import {
  listTeacherDetails,
  createTeacherReview,
} from "../../actions/teacherActions";
import { TEACHER_CREATE_REVIEW_RESET } from "../../constants/teacherConstants";
import Header from "../../components/Header";
import '../../assets/css/style.css'

function TeacherScreenDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const teacherDetails = useSelector((state) => state.teacherDetails);
  const { loading, error, teacher } = teacherDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const teacherReviewCreate = useSelector((state) => state.teacherReviewCreate);
  const {
    loading: loadingTeacherReview,
    error: errorTeacherReview,
    success: successTeacherReview,
  } = teacherReviewCreate;

  useEffect(() => {
    if (successTeacherReview) {
      setRating(0)
      setComment('')
      dispatch({ type: TEACHER_CREATE_REVIEW_RESET })
   }
    dispatch(listTeacherDetails(id));
  }, [dispatch,successTeacherReview]);


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createTeacherReview(
        id, {
        rating,
        comment
    }
    ))
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
                  <Image src={teacher.image} alt={teacher.name} fluid style ={{borderRadius:'6px'}} />
                </Col>
                <Col md={6} varinat="flush"  style={{fontSize:'16px'}}>
                  <ListGroup varinat="flush">
                    <ListGroup.Item>
                      <h3>{teacher.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Rating
                        value={teacher.rating}
                        text={`${teacher.numReviews} ratings`}
                        color="#f8e825"
                      />
                    </ListGroup.Item>


                    <ListGroup.Item>
                      Description: {teacher.description}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6} style={{fontSize:'16px'}} className="mt-5">
                  <h4>Reviews</h4>
                  {teacher.reviews.length === 0 && (
                    <Message variant="info">No Reviews</Message>
                  )}

                  <ListGroup variant="flush">
                    {teacher.reviews.map((review) => (
                      <ListGroup.Item key={review._id}>
                        <strong>{review.name}</strong>
                        <Rating value={review.rating} color="#f8e825" />
                        <p>{review.createdAt.substring(0, 10)}</p>
                        <p>{review.comment}</p>
                      </ListGroup.Item>
                    ))}

                    <ListGroup.Item>
                      <h4>Write a review</h4>

                      {loadingTeacherReview && <Loader />}
                      {successTeacherReview && (
                        <Message variant="success">Review Submitted</Message>
                      )}
                      {errorTeacherReview && (
                        <Message variant="danger">{errorTeacherReview}</Message>
                      )}

                      {userInfo ? (
                        <Form onSubmit={submitHandler}>
                          <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                              as="select"
                              style={{fontSize:'16px'}} 
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="1">1 - Poor</option>
                              <option value="2">2 - Fair</option>
                              <option value="3">3 - Good</option>
                              <option value="4">4 - Very Good</option>
                              <option value="5">5 - Excellent</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group controlId="comment">
                            <Form.Label className="mt-2">Review</Form.Label>
                            <Form.Control
                              as="textarea"
                              row="5"
                              value={comment}
                              style={{fontSize:'16px'}} 
                              onChange={(e) => setComment(e.target.value)}
                            ></Form.Control>
                          </Form.Group>

                          <Button
                            disabled={loadingTeacherReview}
                            type="submit"
                            style={{fontSize:'11px'}} 
                            className="my-3"
                            variant="primary">
                            Submit
                          </Button>
                        </Form>
                      ) : (
                        <Message variant="info">
                          Please <Link to="/login">login</Link> to write a
                          review
                        </Message>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}

export default TeacherScreenDetails;
