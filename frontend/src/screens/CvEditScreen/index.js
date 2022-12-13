import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import FormContainer from "../../components/FormContainer";
import { listCvDetails, updateCv } from "../../actions/cvActions";
import { CV_UPDATE_RESET } from "../../constants/cvConstants";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function CvEditScreen() {
  const { id } = useParams();
  const cvId = id;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const cvDetails = useSelector((state) => state.cvDetails);
  const { error, loading, cv } = cvDetails;

  const cvUpdate = useSelector((state) => state.cvUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = cvUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CV_UPDATE_RESET });
      navigate("/mycv");
    } else {
      if (!cv.name || cv._id !== Number(cvId)) {
        dispatch(listCvDetails(cvId));
      } else {
        setName(cv.name);
        setDescription(cv.description);
      }
    }
  }, [dispatch, cv, cvId, navigate, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCv({
        _id: cvId,
        name,
        description,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("cv_id", cvId);

    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };


      const { data } = await axios.post(
        "/api/jobs/upload/cv/",
        formData,
        config
      );

      console.log(data);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="mt-9 px-5">
      <Header></Header>
      <Link to="/admin/productlist" className="btn btn-light my-3">Go Back</Link>
      <Row className="justify-content-md-center">
        <Col md={7}>
          <FormContainer>
            <h1 style={{textAlign: 'center'}} className="highlight">Edit Product</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    className="rounded-pill mt-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="image">
                  <Form.Label className="mt-2">Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image"
                    className="rounded-pill mt-1"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  ></Form.Control>

                  <input
                    type="file"
                    id="image-file"
                    className="custom-file-input-v mt-3"
                    onChange={uploadFileHandler}
                  ></input>
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group controlId="description">
                  <Form.Label className="mt-2">Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    className="rounded-pill mt-1"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" className="my-4 rounded-pill w-100 btn-sign-in">
                  Update
                </Button>
              </Form>
            )}
          </FormContainer>
        </Col>
      </Row>
    </div>
  );
}

export default CvEditScreen;
