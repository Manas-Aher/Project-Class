import { Button, Modal } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row , Col } from "react-bootstrap";
import modal from './Modal2.module.css';
import axios from 'axios';


const Modal2 = ({ setUpdateData , ...props}) =>{

    const handleUpdateCategory = (values) => {
        axios
          .put(
            `https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/category/${props.product.id}`,
            {
              name: values.categoryname,
              image: values.categoryimage,
              description: values.categorydescription
            }
          )
          .then((response) => {
            console.log('Category updated successfully:', response.data);
            setUpdateData(d=> d+1);
            
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
                        Update Category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={modal.modalBody}>
                    <Formik
                        initialValues={{ categoryname: `${props.product.name}`, categoryimage: `${props.product.image}`, categorydescription: `${props.product.description}` }}
                        validationSchema={Yup.object({
                        categoryname: Yup.string()
                            .required('Category Name is required'),
                        categoryimage: Yup.string()
                            .url('Category Image must be a valid URL')
                            .required('Category Image is required'),
                        categorydescription: Yup.string().required('Category Description is required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            alert(JSON.stringify(values, null, 2));
                            handleUpdateCategory(values);
                            setSubmitting(false);
                        }}
                    >
                        <Form className={modal.form}>
                        <Row>
                            <Col><label htmlFor="categoryname">Category Name</label>
                            <Field name="categoryname" type="text" />
                            <ErrorMessage name="categoryname" component="div" className={modal.error} /></Col>
                            <Col><label htmlFor="categoryimage">Category Image</label>
                            <Field name="categoryimage" type="text" placeholder="Add Category Image"/>
                            <ErrorMessage name="categoryimage" component="div" className={modal.error} /></Col>
                        </Row>
                
                        <label htmlFor="categorydescription">Category Description</label>
                        <Field name="categorydescription" type="text" placeholder="Add Category Description" />
                        <ErrorMessage name="categorydescription" component="div" className={modal.error} />
                
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}><button type="submit" className={`mt-4 ${modal.btn}`} onClick={props.onHide}>Submit</button></div>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Modal2;