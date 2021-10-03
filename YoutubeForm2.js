//with yup valiation:  install yup
//check yup library for more rules

import React from "react";
import { useFormik } from "formik";
import "./formcss.css";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("This Field is Mandatory"), // error message in required object
  email: Yup.string().email("Invalid Email Format").required("required field"),
  channel: Yup.string().required("required field"),
});
const YoutubeForm2 = () => {
  // below hook always return an object containing properties and methods one such property is initialValues
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log(formik.values); to console form values
  // console.log(formik.errors);
  //   console.log(formik.touched); //it gives an object with information of which fields are touched and which no, it is accessed by appyling onBlur={formik.handleBlur}
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />

        {formik.touched.name && formik.errors.name && (
          <div className="errorMsg">{formik.errors.name}</div>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email && formik.errors.email && (
          <div className="errorMsg">{formik.errors.email}</div>
        )}
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />

        {formik.touched.channel && formik.errors.channel && (
          <div className="errorMsg">{formik.errors.channel}</div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm2;
