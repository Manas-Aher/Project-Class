import MainContainer from "../../MainContainer/MainContainer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row , Col } from "react-bootstrap";
import add from './AddCategoryComponent.module.css'
import { addCategory } from "../axios";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const AddCategoryComponent = () =>{

    const [showPopup, setShowPopup] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setShowPopup(false);
        }, 400);
    };

    const handlesubmit = async (values, { setSubmitting, resetForm }) => {
        try { 
            await addCategory ({
                name: values.categoryname,
                image: values.categoryimage,
                description: values.categorydescription
            });
        }
        catch (error) {
            console.error("Error adding category:", error);
        }
        setShowPopup(true);
        setSubmitting(false);
        resetForm();
    };

    // const handlesubmit = (values, { setSubmitting }) =>{
    //         setTimeout(() => {
    //             alert(JSON.stringify(values, null, 2));

    //             axios
    //                 .post(
    //                     'https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/category',
    //                     {
    //                         name: values.categoryname,
    //                         image: values.categoryimage,
    //                         description: values.categorydescription
    //                     }
    //                 )
    //                 .then((response)=>{
    //                     console.log(response.data);
    //                     setShowPopup(true);
    //                 })
    //                 .catch((error)=>{
    //                     console.log(error);
    //                 })
                
    //             setSubmitting(false);
    //             values.categoryname=""
    //             values.categoryimage=""
    //             values.categorydescription=""
    //         }, 400);
    // }

    return(
        <MainContainer style={{paddingTop: "50px", paddingLeft: "40px", width: "100%"}} className={add.main}>
            <h2 className={add.h2}>Add Category</h2>
            <p className={add.p}>Create or Add Categories here</p>
            <Formik
                initialValues={{ categoryname: '', categoryimage: '', categorydescription: '' }}
                validationSchema={Yup.object({
                categoryname: Yup.string()
                    .required('Category Name is required'),
                categoryimage: Yup.string()
                    .required('Category Image is required'),
                categorydescription: Yup.string().required('Category Description is required'),
                })}
                onSubmit={handlesubmit}
            >
                <Form className={add.form}>
                <Row>
                    <Col><label htmlFor="categoryname">Category Name</label>
                    <Field name="categoryname" type="text" placeholder="Add Category Name" />
                    <ErrorMessage name="categoryname" component="div" className={add.error} /></Col>
                    <Col><label htmlFor="categoryimage">Category Image</label>
                    <Field name="categoryimage" type="text" placeholder="Add Category Image"/>
                    <ErrorMessage name="categoryimage" component="div" className={add.error} /></Col>
                </Row>
        
                <label htmlFor="categorydescription">Category Description</label>
                <Field name="categorydescription" type="text" placeholder="Add Category Description" />
                <ErrorMessage name="categorydescription" component="div" className={add.error} />
        
                <button type="submit" className={`mt-4 ${add.btn}`} >Submit</button>
                </Form>
            </Formik>
            <Modal
                show={showPopup}
                onHide={handleClose}
                centered
                className={`${add.modal} ${isClosing ? add.closing : add.open}`}
            >
                <Modal.Header className={add.modal_header}>
                    <Modal.Title className={add.modal_title}>
                        Success
                    </Modal.Title>
                    <button className={add.closeButton} onClick={handleClose}>×</button>
                </Modal.Header>
                <Modal.Body className={add.modal_body}>
                    <p className={add.modal_message}>
                        Your category has been added successfully!
                    </p>
                </Modal.Body>
            </Modal>

        
        </MainContainer>
    )
}

export default AddCategoryComponent;