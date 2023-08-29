import React, { useState } from 'react';
import axios from 'axios';

//css
import "../CSS/TakeExam.css";

const TakeExam = () => {


const [formData, setFormData] = useState({
  question: "",
  optione1: "",
  optione2: "",
  optione3: "",
  optione4: "",
  answer: "",
  AdmitId: "",
});
console.log(formData);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:4000/create-question",
      formData
    );
    console.log(response.data);

    setFormData({
      question: "",
      optione1: "",
      optione2: "",
      optione3: "",
      optione4: "",
      answer: "",
      AdmitId: "",
    });
  } catch (error) {
    console.error("Error submitting question:", error);
  }
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};


  /* Generate a AdmitNumber
  const usedIds = new Set();
  const generateAdmitNumber = () => {
    let id = '';
    const characters = '0123456789';

    for (let i = 0; i < 10; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    if (usedIds.has(id)) {
      return generateAdmitNumber(); 
    }

    usedIds.add(id);
    setAdmitId(id);
  };*/




  return (
    <>
      {/* <div className="admit-section" >
          <button onClick={generateAdmitNumber}>Generate Admit</button>
          <input type="text" name="AdmitId" value={AdmitId} readOnly required />
       
  </div>}*/}

      <h2>Create Questions</h2>
      <div className="questions">
        <form onSubmit={handleSubmit} className="questions-form">
          <div className="question" style={{ padding: "10px" }}>
            <label htmlFor="question">Question:</label>
            <input
              type="text"
              name="question"
              value={formData.question}
              placeholder="Enter your question"
              onChange={handleInputChange}
            />
          </div>

          <div className="option-one" style={{ padding: "10px" }}>
            <label htmlFor="optione1">Option 1:</label>
            <input
              type="text"
              name="optione1"
              value={formData.optione1}
              placeholder="Enter your option-one"
              onChange={handleInputChange}
            />
          </div>

          <div className="option-two" style={{ padding: "10px" }}>
            <label htmlFor="optione1">Option 2:</label>
            <input
              type="text"
              name="optione2"
              value={formData.optione2}
              placeholder="Enter your option-two"
              onChange={handleInputChange}
            />
          </div>

          <div className="option-three" style={{ padding: "10px" }}>
            <label htmlFor="optione3">Option 3:</label>
            <input
              type="text"
              name="optione3"
              value={formData.optione3}
              placeholder="Enter your option-three"
              onChange={handleInputChange}
            />
          </div>

          <div className="option-four" style={{ padding: "10px" }}>
            <label htmlFor="optione1">Option 4:</label>
            <input
              type="text"
              name="optione4"
              value={formData.optione4}
              placeholder="Enter your option-four"
              onChange={handleInputChange}
            />
          </div>

          <div className="answer" style={{ padding: "10px" }}>
            <label htmlFor="answer">Answer: </label>
            <input
              type="text"
              name="answer"
              value={formData.answer}
              placeholder="Enter your answer"
              onChange={handleInputChange}
            />
          </div>

          <div className="Admit" style={{ padding: "10px" }}>
            <label htmlFor="">Admit no</label>
            <input type="text" name="AdmitId" value={formData.AdmitId} onChange={handleInputChange}  required />
          </div>

          <div id="checkbox-div">
            <input type="checkbox" id="checkbox-input" />
            <p>
              *please be sure you have to put the same Admit number for all 
              question
            </p>
          </div>



          <button type="submit">Submit</button>
        </form>
      </div>
    </>

  );
};

export default TakeExam;
