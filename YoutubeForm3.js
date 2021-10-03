//formik component
//Formik, Form, Field and ErrorMessage

//with yup valiation:  install yup
//check yup library for more rules

import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./formcss.css";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "", // this is to get nested object in output
    twitter: "",
  },
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("This Field is Mandatory"), // error message in required object
  email: Yup.string().email("Invalid Email Format").required("required field"),
  channel: Yup.string().required("required field"),
  comments: Yup.string().required("Please add some comments..."),
});
const YoutubeForm3 = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />

        <ErrorMessage name="name" />
        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email" />

        <ErrorMessage name="email">
          {/* through render props */}
          {(errorMessage) => {
            console.log("renderprops", errorMessage);
            return <h5 className="errorMsg">{errorMessage}</h5>;
          }}
        </ErrorMessage>
        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" />

        <ErrorMessage name="channel" className="errorMsg" />
        <label htmlFor="comments">Comments</label>
        <Field component="textarea" type="text" name="comments" id="comments" />
        <ErrorMessage name="comments" component="div" />

        <label htmlFor="facebook">facebook</label>
        <Field type="text" name="social.facebook" id="facebook" />
        <label htmlFor="twitter">Twitter</label>
        <Field type="text" name="social.twitter" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm3;

// Form Automatically takes care of formik handlesubmit method

//Field Component bydefault maps field value to formik values

//ErrorMessage automaically maps with the schema for error messages

//Field has default value as input but we can have as='textarea/select/any reactcomponent'

//we can use component instead of as prop

//we can have component prop for errormessage as well
