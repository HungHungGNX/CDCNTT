import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Teacher from "../../components/Teacher";
import { listTeachers } from "../../actions/teacherActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";

import {useSearchParams} from 'react-router-dom'
import '../../assets/css/style.css'


function TeacherScreen() {
  const dispatch = useDispatch();
  const teacherList = useSelector((state) => state.teacherList);
  const { error, loading, teachers } = teacherList;
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  useEffect(() => {
    dispatch(listTeachers(keyword));
  }, [dispatch,keyword]);
  console.log(teachers)
  return (
    <div>
      <Header />
      <section id="page-header">

      </section>
      <Container fluid className="mt-4">
      {/* <SearchBox></SearchBox> */}
      </Container>
              
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <section id="product1" className="section-p1">
              <div className="pro-container">
                {teachers.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Teacher teacher={product} />
                  </Col>
                ))}
              </div>
            </section>
          </Row>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TeacherScreen;