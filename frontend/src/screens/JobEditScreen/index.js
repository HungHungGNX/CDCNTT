import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import FormContainer from "../../components/FormContainer";
import { listJobDetails, updateJob } from "../../actions/jobActions";
import { JOB_UPDATE_RESET } from "../../constants/jobConstants";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function ProductEditScreen({}) {
  const { id } = useParams();
  const jobId = id;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const jobDetails = useSelector((state) => state.jobDetails);
  const { error, loading, job } = jobDetails;

  const jobUpdate = useSelector((state) => state.jobUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = jobUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: JOB_UPDATE_RESET });
      navigate("/admin/joblist");
    } else {
      if (!job.name || job._id !== Number(jobId)) {
        dispatch(listJobDetails(jobId));
      } else {
        setName(job.name);
        setImage(job.image);
        setCountInStock(job.countInStock);
        setDescription(job.description);
      }
    }
  }, [dispatch, job, jobId, navigate, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateJob({
        _id: jobId,
        name,
        image,
        countInStock,
        description,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("product_id", jobId);

    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "/api/jobs/upload/",
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  return (
    <div className="mt-9 px-5">
      <Header></Header>
      <Link to="/admin/joblist" className="btn btn-light my-3">Go Back</Link>
      <Row className="justify-content-md-center">
        <Col md={7}>
          <FormContainer>
            <h1 style={{textAlign: 'center'}} className="highlight">Edit Job</h1>
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


                <Form.Group controlId="countinstock">
                  <Form.Label className="mt-2">Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter stock"
                    className="rounded-pill mt-1"
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                  ></Form.Control>
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

export default ProductEditScreen;
