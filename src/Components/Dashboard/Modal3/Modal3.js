import { Button, Modal } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row , Col } from "react-bootstrap";
import modal from './Modal3.module.css';
import axios from 'axios';

const Modal3 = (props) =>{

    const handleUpdateCategory = async (values) => {
        axios
          .put(
            `https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/product/${props.product.id}`,
            {
              name: values.productname,
              image: values.productimage,
              description: values.productdescription,
              material: values.productmaterial,
              price: values.productprice
            }
          )
          .then((response) => {
            console.log('Category updated successfully:', response.data);
            props.setUpdateData(d=> d+1);
          })
          .catch((err) => {
            console.error('Error updating category:', err);
          });
    };

    return(
        <>
            <Modal
            {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={modal.modal}
            >
                <Modal.Header closeButton className={modal.modalHeader}>
                    <Modal.Title id="contained-modal-title-vcenter" className={modal.modalTitle}>
                        Update Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={modal.modalBody}>
                    <Formik
                        initialValues={{ productname: `${props.product.name}`, productimage: `${props.product.image}`, productdescription: `${props.product.description}`, productmaterial: `${props.product.material}`, productprice: `${props.product.price}`}}
                        validationSchema={Yup.object({
                        productname: Yup.string()
                            .required('Product Name is required'),
                        productimage: Yup.string()
                            .required('Product Image is required'),
                        productdescription: Yup.string()
                            .required('Product Description is required'),
                        productmaterial: Yup.string()
                            .required('Product Material is required'),
                        productprice: Yup.string()
                            .required('Product Price is required'),
                        })}
                        
                        onSubmit={(values, { setSubmitting }) => {
                            alert(JSON.stringify(values, null, 2));
                            handleUpdateCategory(values);
                            setSubmitting(false);
                        }}
                    >
                        <Form className={modal.form}>
                        <div className='mb-5'>
                            <span>Product Information</span>
                            <Row>
                                <Col>
                                <Field name="productname" type="text" placeholder="Product Name" />
                                <ErrorMessage name="productname" component="div" className={modal.error} /></Col>
                                <Col>
                                <Field name="productimage" type="text" placeholder="Product Image"/>
                                <ErrorMessage name="productimage" component="div" className={modal.error} /></Col>
                            </Row>
                    
                            <Field name="productdescription" type="text" placeholder="Product Description" style={{marginBottom: "15px"}}/>
                            <ErrorMessage name="productdescription" component="div" className={modal.error} />

                            <Row style={{marginBottom: "0"}}>
                                <Col>
                                <Field name="productmaterial" type="text" placeholder="Product Material" />
                                <ErrorMessage name="productmaterial" component="div" className={modal.error}/></Col>
                                <Col>
                                <Field name="productprice" type="text" placeholder="Product Price"/>
                                <ErrorMessage name="productprice" component="div" className={modal.error}/></Col>
                                <Col>
                                <Field name="productdiscount" type="text" placeholder="Product Discount"/></Col>
                            </Row>
                        </div>
                        <Row>
                            <Col>
                                <div>
                                <span>Product Category</span>
                                    <Field name="productcategory" type="text" placeholder="Product Category" />
                                </div>  
                            </Col>
                            <Col>
                                <div>
                                    <span>Sales Information</span>
                                    <Row style={{marginBottom: "0"}}>
                                        <Col>
                                            <Field name="quantitysold" type="text" placeholder="Quantity Sold" />
                                        </Col>
                                        <Col>
                                            <Field name="quantitysold" type="text" placeholder="0" className={modal.field}/>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <span>Additional Information</span>
                            <Row style={{marginBottom: "0"}}>
                                <Col>
                                <Field name="tags" type="text" placeholder="Tags" />
                                <ErrorMessage name="tags" /><p style={{marginBottom: "0", fontSize: "12px", fontWeight:"600"}}>Separate each tag with comma between them e.g:black, cotton, jeans</p></Col>
                                <Col>
                                <Field name="rating" type="text" placeholder="avgRating"/>
                                <ErrorMessage name="rating" /></Col>
                            </Row>
                        </div>
                        <button type="submit" className={`mt-4 mb-5 ${modal.btn}`} onClick={props.onHide}>Submit</button>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Modal3;