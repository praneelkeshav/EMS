import React from 'react';
import { Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate and NavLink
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const Signin1 = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>

              {/* Formik Form for JWT Login */}
              <Formik
                initialValues={{
                  email: '', // Empty by default
                  password: '', // Empty by default
                  submit: null
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                  setSubmitting(true);

                  // Simulate API call
                  setTimeout(() => {
                    // Replace this with actual authentication logic
                    const validCredentials = {
                      email: 'info@elements.com',
                      password: '123456'
                    };

                    if (values.email === validCredentials.email && values.password === validCredentials.password) {
                      navigate('/dashboard'); // Redirect to dashboard on successful login
                    } else {
                      setErrors({ submit: 'Invalid email or password' });
                    }

                    setSubmitting(false);
                  }, 1000); // Simulated delay for async call
                }}
              >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        label="Email Address / Username"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="email"
                        value={values.email}
                        placeholder="Enter your email"
                      />
                      {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
                    </div>
                    <div className="form-group mb-4">
                      <input
                        className="form-control"
                        label="Password"
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        value={values.password}
                        placeholder="Enter your password"
                      />
                      {touched.password && errors.password && (
                        <small className="text-danger form-text">{errors.password}</small>
                      )}
                    </div>

                    <div className="custom-control custom-checkbox text-start mb-4 mt-2">
                      <input type="checkbox" className="custom-control-input mx-2" id="customCheck1" />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        Save credentials.
                      </label>
                    </div>

                    {errors.submit && (
                      <Col sm={12}>
                        <Alert variant="danger">{errors.submit}</Alert>
                      </Col>
                    )}

                    <Row>
                      <Col mt={2}>
                        <Button
                          className="btn-block mb-4"
                          disabled={isSubmitting}
                          size="large"
                          type="submit"
                          variant="primary"
                        >
                          Sign in
                        </Button>
                      </Col>
                    </Row>
                  </form>
                )}
              </Formik>

              <p className="mb-2 text-muted">
                Forgot password?{' '}
                <NavLink to={'#'} className="f-w-400">
                  Reset
                </NavLink>
              </p>
              <p className="mb-0 text-muted">
                Don’t have an account?{' '}
                <NavLink to="/auth/signup-1" className="f-w-400">
                  Signup
                </NavLink>
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin1;
