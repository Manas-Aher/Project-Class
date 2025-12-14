import classes from "./ProductListComponent.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { FaPen } from "react-icons/fa6";
import Modal1 from "../Modal1/Modal1";
import Modal3 from "../Modal3/Modal3";
import { getProducts, deleteProduct } from "../axios";
import React from 'react';

const Productlist = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const [modalShow1, setModalShow1] = React.useState(false);

    const [productdata, setProductdata] = useState([]);

    const [updateData, setUpdateData] = useState(1);

    const [selectedproduct, setSelectedProduct] = useState([]);

    const handleShowModel = (product) => {
        setSelectedProduct(product)
        setModalShow(true)
    }

    const handleShowModel1 = (product) => {
        setSelectedProduct(product)
        setModalShow1(true)
    }

    // const handledelete = (product) => {
    //     axios.delete(`https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/category/${product.categoryId}/product/${product.id}`)
    //     .then((response) => {
    //         console.log(response.data);
    //         setUpdateData(d => d + 1);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         console.log(product.name)
    //     })
    // }

        const handledelete = async (product) => {
            try {
                await deleteProduct(product);

                setUpdateData(d => d + 1);

                alert(`Product '${product.name}' deleted successfully!`);
            }
            
            catch (error) {
                console.error("Error deleting product:", error);
            }
        };


    useEffect (() => {
        const fetchData = async () => {
            try {
                const products = await getProducts();
                setProductdata(products);
            }
            catch (error) {
                console.error ('Error fetching products:', error);
                throw error;
            }
        };
        fetchData();
    }, [updateData]);
    
    return (
        <>
            <Container className={classes.container}>
                <div style={{ paddingTop: "20px" }}>
                    <h3 className={classes.h3}>
                        <b>Product</b>
                    </h3>
                    <p className={classes.p}>View Edit and Delete Product</p>
                    <div className={classes.main}>
                        <Row className={classes.title}>
                            <Col>
                                <p>Id</p>
                            </Col>
                            <Col>
                                <p>Product Name</p>
                            </Col>
                            <Col>
                                <p>Image</p>
                            </Col>
                            <Col>
                                <p>Material</p>
                            </Col>
                            <Col>
                                <p>Description</p>
                            </Col>
                            <Col>
                                <p>Price</p>
                            </Col>
                            <Col>
                                <p>Action</p>
                            </Col>
                        </Row>
                        {productdata.map((product) => {
                            return (<Row className={classes.row} key={product.id}>
                                <Col className={classes.col}>{product.id}</Col>
                                <Col style={{display: "flex", alignItems: "center"}}>{product.name}</Col>
                                <Col className={classes.col}><img src={product.image} alt="avatar" className={classes.imag}></img></Col>
                                <Col className={classes.col}>{product.material}</Col>
                                <Col className={classes.desc}>{product.description}</Col>
                                <Col className={classes.col}>{`$${product.price}`}</Col>
                                <Col style={{ textAlign: "center" }} className={classes.btn}>
                                    <button onClick={() => handleShowModel(product)}><FaRegEye className={classes.icon} /></button>
                                    <button onClick={() => handleShowModel1(product)}><FaPen className={classes.icon} /></button>
                                    <button onClick={() => handledelete(product)}><ImBin className={classes.icon} /></button>
                                </Col>
                            </Row>
                            )
                        })}
                    </div>
                </div>
            </Container>
            <Modal1
                show={modalShow}
                onHide={() => setModalShow(false)}
                product={selectedproduct}
            />
            <Modal3
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                product={selectedproduct}
                setUpdateData = {setUpdateData}
            />
        </>
    );
};
export default Productlist;