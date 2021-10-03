//formik by default runs validation on change, on blur and onsubmit

import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./testform.css";

const initialValues = {
  fullName: "",
  age: "",
  favMovie: [""],
};

const onSubmit = (values) => {
  console.log("values", values);
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("required field"),
  age: Yup.number().required().positive().integer(),
});

const TestForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false} //to stop error message on  onChange
        validateOnBlur={false}
      >
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
              console.log("form errors", form.errors);
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
          <button>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TestForm;
