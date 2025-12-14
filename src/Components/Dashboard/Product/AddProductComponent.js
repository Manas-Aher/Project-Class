import MainContainer from "../../MainContainer/MainContainer";
import add from './AddProductComponent.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row , Col } from "react-bootstrap";
import { addProduct } from "../axios";

const AddProductComponent = () =>{

// OLD CODE

    // const handlesubmit = (values, { setSubmitting }) => {
    //     setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));

    //         axios
    //             .post(
    //                 `https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/product`,
    //                 {
    //                     name: values.productname,
    //                     image: values.productimage,
    //                     description: values.productdescription,
    //                     material: values.productmaterial,
    //                     price: values.productprice,
    //                     categoryId: values.categoryId
    //                 }
    //             )
    //             .then((response) => {
    //                 console.log(response.data);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             })

    //         setSubmitting(false);
    //     }, 400);
    // }


    const handlesubmit = async (values, { setSubmitting , resetForm }) => {
        try {
            await addProduct({
                name: values.productname,
                image: values.productimage,
                description: values.productdescription,
                material: values.productmaterial,
                price: values.productprice,
                categoryId: values.categoryId
            });
            alert('Product added successfully!');
            resetForm();
        }
        catch (error) {
            console.error('Error adding product:', error);
        }
        finally {
            setSubmitting(false);
        }

    };

    return(
        <MainContainer className={add.mainContainer}>
                <h2 className={add.h2}>Add Product</h2>
                <p>Create or Add Product here</p>
                <Formik
                    initialValues={{ productname: '', productimage: '', productdescription: '', productmaterial: '', productprice: '', categoryId: ''}}
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
                    
                onSubmit={handlesubmit}
                >
                    <Form className={add.form}>
                    <div className={`${add.div} mb-5`}>
                        <span className={add.bordertext}>Product Information</span>
                        <Row className={add.row}>
                            <Col className={add.col}>
                            <Field name="productname" type="text" placeholder="Product Name" />
                            <ErrorMessage name="productname" component="div" className={add.error} /></Col>
                            <Col className={add.col}>
                            <Field name="productimage" type="text" placeholder="Product Image"/>
                            <ErrorMessage name="productimage" component="div" className={add.error} /></Col>
                        </Row>
                
                        <Field name="productdescription" type="text" placeholder="Product Description" style={{marginBottom: "15px"}}/>
                        <ErrorMessage name="productdescription" component="div" className={add.error} />

                        <Row style={{marginBottom: "0"}}>
                            <Col className={add.col}>
                            <Field name="productmaterial" type="text" placeholder="Product Material" />
                            <ErrorMessage name="productmaterial" component="div" className={add.error}/></Col>
                            <Col className={add.col}>
                            <Field name="productprice" type="text" placeholder="Product Price"/>
                            <ErrorMessage name="productprice" component="div" className={add.error}/></Col>
                            <Col className={add.col}>
                            <Field name="productdiscount" type="text" placeholder="Product Discount"/>
                            <ErrorMessage name="productdiscount" component="div" className={add.error}/></Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            <div className={add.div}>
                            <span className={add.bordertext}>Product Category</span>
                                <Field name="categoryId" type="text" placeholder="Product Category" />
                                <ErrorMessage name="categoryId" component="div" className={add.error}/>
                            </div>
                        </Col>
                        <Col>
                            <div className={add.div}>
                                <span className={add.bordertext}>Sales Information</span>
                                <Row style={{marginBottom: "0"}}>
                                    <Col className={add.col}>
                                        <Field name="quantitysold" type="text" placeholder="Quantity Sold" />
                                        <ErrorMessage name="quantitysold" component="div" className={add.error}/>
                                    </Col>
                                    <Col className={add.col}>
                                        <Field name="quantitysold" type="text" placeholder="0" className={add.field}/>
                                        <ErrorMessage name="quantitysold" component="div" className={add.error}/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <div className={add.div}>
                        <span className={add.bordertext}>Additional Information</span>
                        <Row style={{marginBottom: "0"}}>
                            <Col className={add.col}>
                            <Field name="tags" type="text" placeholder="Tags" />
                            <ErrorMessage name="tags" /><p style={{marginBottom: "0", fontSize: "12px", fontWeight:"600"}}>Separate each tag with comma between them e.g:black, cotton, jeans</p></Col>
                            <Col className={add.col}>
                            <Field name="rating" type="text" placeholder="avgRating"/>
                            <ErrorMessage name="rating" /></Col>
                        </Row>
                    </div>
                    <button type="submit" className={`mt-4 mb-5 ${add.btn}`}>Submit</button>
                    </Form>
                </Formik>
        </MainContainer>
    )
}

export default AddProductComponent;