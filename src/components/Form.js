import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  const [submitFormData, setSubmitFormData] = useState([]); 
  // creating an array that will hold the form data

  const [errors, setErrors] = useState([]);
  // creating a new array to handle errors

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (firstName.length > 0 && lastName.length > 0) {
      const formData = {
        firstName: firstName,
        lastName: lastName
      }
      const dataArray = [...submitFormData, formData];
      // Adding my new form data to the array
      setSubmitFormData(dataArray);
      // Setting the state to the new array
  
      setFirstName("");
      setLastName(""); //clearing input fields
      setErrors([]);
  
    } else {
      setErrors(["Please enter a first name and last name"]);
    }
    
  }

  const manageErrors = errors.length > 0 ? errors.map((error, index) => {
    return <p key={index} style={{ color: "red" }}>{error}</p>
  }) : null



  const displayData = submitFormData.map((data, index) => {
    return <li key={index}>
      {`${data.firstName}  `} {data.lastName}
      </li>
  })



  return (
    <>
      <h4>{manageErrors}</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="Input First Name" />
        <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="Input Last Name"/>
        <button type="submit">Submit</button>
      </form>


      <h3>{displayData}</h3>
    </>
  );
}

export default Form;
