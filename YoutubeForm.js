import React from "react";
import { useFormik } from "formik";
import "./formcss.css";
const YoutubeForm = () => {
  // below hook always return an object containing properties and methods one such property is initialValues
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => console.log(values),
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "This Field is equired"; //any thing can come in string
      }
      if (!values.email) {
        errors.email = "This Field is equired"; //any thing can come in string
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          values.email
        )
      ) {
        errors.email = "invalid email address"; //regex validation
      }
      if (!values.channel) {
        errors.channel = "This Field is equired"; //any thing can come in string
      }

      return errors;
    },
  });

  // console.log(formik.values); to console form values
  // console.log(formik.errors);
  console.log(formik.touched); //it gives an object with information of which fields are touched and which no, it is accessed by appyling onBlur={formik.handleBlur}
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

export default YoutubeForm;
