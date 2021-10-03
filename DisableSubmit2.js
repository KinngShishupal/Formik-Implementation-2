//diabling submit button based on form submission
//when the user has submitted the form submit button should be displayed so that user diesnot resubmit it
//it could be troblesome during checkout in e-commerce sites
// we will use property isSubmitting
//here will be also see another prop which handlesubmit provides to onsubmit

import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./testform.css";

const initialValues = {
  fullName: "",
  age: "",
  favMovie: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("values", values);
  console.log("onSubmitprops", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm(initialValues);
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("required field"),
  age: Yup.number().required().positive().integer(),
});

const DisableSubmit2 = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // validateOnMount={true} //it runs the valiation on page load also
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DisableSubmit2;
