import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product";
import { listProducts } from "../../actions/productActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";

import {useSearchParams} from 'react-router-dom'
import '../../assets/css/style.css'


function CourseScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch,keyword]);

  return (
    <div>
      <Header />
      <section id="page-header">

      </section>
      <Container fluid className="mt-4">
      <SearchBox></SearchBox>
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
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
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

export default CourseScreen;