import classes from "./categorylist.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { FaPen } from "react-icons/fa6";
import Modal1 from "../Modal1/Modal1";
import Modal2 from "../Modal2/Modal2";
import { getCategories, deleteCategory } from "../axios";
import React from 'react';

const Catogorylist = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [modalShow1, setModalShow1] = React.useState(false);

  const [productdata, setProductdata] = useState([]);

  const [selectedproduct, setSelectedProduct] = useState([]);

  const [updateData , setUpdateData] = useState(1);

  const handleShowModel = (product) =>{
    setSelectedProduct(product)
    setModalShow(true)
  }
  const handleShowModel1 = (product) =>{
    setSelectedProduct(product)
    setModalShow1(true)
  }

  // const handledelete = (product) =>{
  //   axios
  //     .delete(`https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/category/${product.id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setUpdateData(d => d + 1);
  //     })
  //     .catch((error)=>{
  //       console.log(error);
  //     })
  // }

    const handledelete = async (product) => {
      try {
          await deleteCategory(product);
          setUpdateData(d => d + 1 );
          alert(`Category '${product.name}' deleted successfully!`);
      }
      catch (error) {
          console.error("Error deleting category:", error);
      }
    }
  
  // useEffect(() => {
  //   axios
  //     .get("https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/category")
  //     .then((response) => {
  //       setProductdata(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [updateData]);     //refresh the data means inshort it shows refresh data means it run above axios


  useEffect(() => {
    try {
      const fetchData = async () => {
        const categories = await getCategories();
        setProductdata(categories);
      }
      fetchData();
    }
    catch (error) {
      console.error("Error fetching categories:", error);
    }
  },[updateData]);


  return (
    <>
    <Container className={classes.container}>
      <div style={{paddingTop: "20px"}}>
        <h3 style={{marginLeft: "50px", marginTop: "20px", fontSize: "25px"}}>
          <b>Category</b>
        </h3>
        <p className={classes.p}>View Edit and Delete Category</p>
        <div className={classes.main}>
          <Row className={classes.title}>
            <Col>
              <p>Id</p>
            </Col>
            <Col>
              <p>Category</p>
            </Col>
            <Col>
              <p>Image</p>
            </Col>
            <Col>
              <p>Description</p>
            </Col>
            <Col>
              <p>Action</p>
            </Col>
          </Row>
            {productdata.map((product)=>{
                  return (<Row className={classes.row} key={product.id}>
                  <Col className={classes.col}>{product.id}</Col>
                  <Col style={{display: "flex", alignItems: "center"}}>{product.name}</Col>
                  <Col className={classes.col}><img src={product.image} alt="avatar" className={classes.imag}></img></Col>
                  <Col className={classes.desc}>{product.description}</Col>
                  <Col style={{textAlign: "center"}} className={classes.btn}>
                  <button onClick={() => handleShowModel(product)} ><FaRegEye /></button>
                  <button onClick={() => handleShowModel1(product)}><FaPen /></button>
                  <button onClick={() => handledelete(product)}><ImBin /></button>
                  </Col>
                </Row>
                )})}
        </div>
      </div>
    </Container>
    <Modal1
      show={modalShow}
      onHide={() => setModalShow(false)}
      product={selectedproduct}
    />
    <Modal2
      show={modalShow1}
      onHide={() => setModalShow1(false)}
      product={selectedproduct}
      setUpdateData = {setUpdateData}
    />
    </>
  );
};
export default Catogorylist;
