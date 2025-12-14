import MainContainer from '../MainContainer/MainContainer'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
import login from './login.module.css'
import axios from 'axios';
import { useState } from 'react';


const LoginComponent = () =>{

    const [error, seterror] = useState("");

    const navigate = useNavigate();

    return(
        <MainContainer style={{ display: "flex", alignItems: "center", width: "100%" , justifyContent: "center", height: "100vh"}} >
            <Formik
                initialValues={{ username: '', password: ''}}
                // validationSchema={Yup.object({
                //     username: Yup.string().required("Username is required"),
                //     password: Yup.string().matches(
                //         /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,16}$/,
                //     'Password must be between 6 and 12 characters, include at least one uppercase letter, one lowercase letter, one number, and one special character.').required('Password is required')
                // })}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    axios.post('https://dummyjson.com/auth/login', values)
                    .then(res =>{
                        console.log(res)
                        // sessionStorage.setItem("token", res.data.accessToken);
                        sessionStorage.setItem("token",res.data.accessToken)
                        navigate('/dashboard')
                        seterror("");
                    })
                    .catch(err => {
                        if(err){
                            seterror("Username and Password is invalid")
                        }
                    })

                    setSubmitting(false);
                }, 400);
                }}
            >   
                <Form className={login.form}>
                    <label htmlFor="username">Username</label>
                    <Field name="username" type="text" placeholder="Enter your username" id="username" className="mb-3" />
                    <ErrorMessage name="username" component="div" className={login.error} />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" placeholder="Enter your Password" id="password" />
                    <ErrorMessage name="password" component="div" className={login.error} />

                    <p component="div" className={login.error}>{error}</p>

                    <button type="submit" className={login.btn}>Submit</button>
                </Form>
            </Formik>
        </MainContainer>
    )
}

export default LoginComponent;