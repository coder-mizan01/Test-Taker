import React, { useEffect, useState } from "react";
import { setAllQuestions } from "../Redux/QuestionReducer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import QuestionPaper from "../Component/QuestionPaper";

//css
import "../CSS/AttendExam.css";

const AttendExam = () => {
  const [AdmitNumber, setAdmitNumber] = useState("");
  const [updateQuestion, setupdateQuestion] = useState([]);

  const dispatch = useDispatch();
  const allQuestion = useSelector((state) => state.question.allQuestion);
  console.log(allQuestion);

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/all-question");

      if (response.data.success) {
        dispatch(setAllQuestions(response.data.questions));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    let filterQuestions;
    filterQuestions = allQuestion.filter((question) => {
      return question.AdmitId === AdmitNumber;
    });
    setupdateQuestion(filterQuestions);
    setAdmitNumber("");
  };

  console.log(updateQuestion);

  return (
    <>
      {updateQuestion.length === 0 && (
        <div className="attend-exam" style={{ padding: "10px" }}>
          <p>Give Admit Number</p>
          <input
            type="text"
            value={AdmitNumber}
            onChange={(e) => setAdmitNumber(e.target.value)}
            required
          />
          <button type="submit" onClick={handleSubmit}>
            submit admit
          </button>
        </div>
      )}

      {updateQuestion.length > 0 && (
        <QuestionPaper updateQuestion={updateQuestion} />
      )}
    </>
  );
};

export default AttendExam;
