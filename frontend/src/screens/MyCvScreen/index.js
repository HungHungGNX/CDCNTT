import { useState, useEffect, React ,useRef} from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Form, Button, Row, Col, Table,Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import FormContainer from "../../components/FormContainer";
import { useNavigate } from "react-router-dom";
import { listMyCv } from "../../actions/cvActions";
import Header from "../../components/Header";
import {
  listJobDetails,
} from "../../actions/jobActions";



function MyCvScreen() {
    const navigate = useNavigate();
  
    const dispatch = useDispatch();
  
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
  
    const cvListMy = useSelector((state) => state.cvListMy);
    const { loading: loadingCv, error: errorCv, cv } = cvListMy;

    const jobDetails = useSelector((state) => state.jobDetails);
    const { loading, error, job } = jobDetails;


    const jobGlobal = useRef();
  
    useEffect(() => {
      if (!userInfo) {
        navigate("/login");
      } else {
          dispatch(listMyCv());
      }
    },[dispatch, navigate, userInfo])

    const handlerDate = (str) => {
        const date = new Date(str.split('T')[0]);
        return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    }

    if(cv){
      jobGlobal.current = cv.job
    }

    console.log(jobGlobal.current)
    return (
  <div>
  <Header></Header>
      <main className="py-3 mtBig">
        <Container>
        <Row className="mt-9">
          <Col>
            <h2 style={{textAlign: 'center'}}>My CV</h2>
            {loadingCv ? (
              <Loader />
            ) : errorCv ? (
              <Message variant="danger">{errorCv}</Message>
            ) : (
              <Table striped responsive className="table-sm" style={{fontSize:'12px'}}>
                <thead>
                  <tr>
                    <th style={{fontSize:'12px'}}>ID</th>
                    <th style={{fontSize:'12px'}}>Name</th>
                    <th style={{fontSize:'12px'}}>Description</th>
                    <th style={{fontSize:'12px'}}>Create</th>
                    <th style={{fontSize:'12px'}}>View</th>
                  </tr>
                </thead>
  
                <tbody>
                  {cv.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{handlerDate(item.createAt.substring(0, 10))}</td>
                      <td>
                      <img src={item.image} style={{display:'none'}}></img>
                      <a href={item.image} target="_blank">Show CV</a></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
        </Container>
      </main>
  </div>
    );
  }
  
  export default MyCvScreen;