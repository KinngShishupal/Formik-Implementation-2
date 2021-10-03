//instead of API we will mock data here to see the functionality

import React, { useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./testform.css";

const initialValues = {
  fullName: "",
  age: "",
  favMovie: [""],
};

const savedValues = {
  fullName: "shishupal singh",
  age: "89",
  favMovie: ["prison break", "money Heist"],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("values", values);
  console.log("onSubmitprops", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("required field"),
  age: Yup.number().required().positive().integer(),
});

const LoadSavedData = () => {
  const [data, setData] = useState(null);
  return (
    <div>
      <Formik
        initialValues={data || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true} //this props allows us load data
      >
        {(formik) => {
          console.log("formik render props", formik);
          const { isValid, dirty, isSubmitting } = formik;
          console.log(isValid);
          return (
            <Form>
              <Field type="text" name="fullName" placeholder="Name..." />
              <ErrorMessage name="fullName" />
              <Field type="number" name="age" placeholder="age..." />
              <ErrorMessage name="age">
                {(errorMessage) => {
                  return <div className="red">{errorMessage}</div>;
                }}
              </ErrorMessage>
              <FieldArray name="favMovie">
                {(props) => {
                  const { form, push, remove } = props;
                  const { values } = form;
                  const { favMovie } = values;
                  return (
                    <div>
                      {favMovie.map((movie, index) => {
                        return (
                          <div key={index}>
                            <Field type="text" name={`favMovie[${index}]`} />
                            <button onClick={() => push("")}>+</button>
                            {index > 0 && (
                              <button onClick={() => remove(index)}>-</button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
              <button disabled={isSubmitting}>Submit</button>
              <button type="button" onClick={() => setData(savedValues)}>
                Load Saved Data
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoadSavedData;
