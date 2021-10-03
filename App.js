import React from "react";
import YoutubeForm from "./YoutubeForm";
import YoutubeForm2 from "./YoutubeForm2";
import YoutubeForm3 from "./YoutubeForm3";
import YoutubeForm4 from "./YoutubeForm4";
import TestForm from "./TestForm";
import DisableSubmit from "./DisableSubmit";
import DisableSubmit2 from "./DisableSubmit2";
import LoadSavedData from "./LoadSavedData";

const App = () => {
  return (
    <div>
      <h1>Formik Example</h1>
      {/* <YoutubeForm /> */}
      {/* <h3>With Yup</h3>
      <YoutubeForm2 /> */}

      {/* <h3>Reducing Boilerplate</h3>
      <YoutubeForm3 /> */}

      {/* <h3>Field array</h3>
      <YoutubeForm4 /> */}

      {/* <TestForm /> */}

      {/* <h3>Disabling Submit Button</h3>
      <DisableSubmit /> */}

      {/* <h3>Disabling Submit Button by second method</h3>
      <DisableSubmit2 /> */}

      <h3>Loading Saved Data</h3>
      <LoadSavedData />
    </div>
  );
};

export default App;
